import { MotionProps, motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMapPin } from "react-icons/fi";
import { SiDiscord, SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // Track if the animation has already been triggered
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="contact">
      <div className="min-h-screen px-4 py-2 text-zinc-50">
        <div className="flex items-center justify-center mt-24">
          <h1 className="text-4xl font-bold mb-10 font-geist text-white">
            Contact
          </h1>
        </div>
        <motion.div
          ref={ref}
          initial="initial"
          animate={hasAnimated ? "animate" : "initial"}
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
          <LocationBlock />
          <ContactBlock1 />
        </motion.div>
      </div>
    </section>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 backdrop-blur-sm bg-white/5 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 p-0">
    <iframe
      title="FXEC Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5724246391424!2d77.72153007402076!3d8.73208699131786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411f2fd003b89%3A0xcbfcb2bcc6823787!2sFrancis%20Xavier%20Engineering%20College%2C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1739849944368!5m2!1sen!2sin"
      className="w-full h-full rounded-lg"
      style={{ minHeight: "250px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </Block>
);
const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-green-500 md:col-span-3"
    >
      <a
        href="https://chat.whatsapp.com/LRUPZXnPOxZLH2zpCFrNsO"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiWhatsapp />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] md:col-span-3"
    >
      <a
        href="https://www.instagram.com/techfirm_2k25?igsh=M2Z4bGxuMmtmbGYw"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-white md:col-span-3"
    >
      <a
        href="mailto:techfirm24fx@gmail.com"
        className="grid h-full place-content-center text-3xl text-red-800"
      >
        <SiGmail className="text-red-600" />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-blue-700 md:col-span-3"
    >
      <a
        href="https://discord.gg/Jptxc2ZhWs"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiDiscord />
      </a>
    </Block>
  </>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-2 md:col-span-6 font-geist-mono">
    <p className="text-center text-lg font-bold text-zinc-50 flex items-center gap-2">
      <FiMapPin className="text-red-500" /> FXEC - APJ Auditorium
    </p>

    <p className="text-center text-lg text-zinc-400">
      103/G2, Bypass Road, Vannarpettai, Tirunelveli – 627003, Tamil Nadu,
      India.
    </p>
  </Block>
);

const ContactBlock1 = () => (
  <Block className="col-span-12 flex flex-col items-center justify-center  md:col-span-6">
    <p className="text-center flex flex-col text-lg text-zinc-400 font-geist-mono">
      For Queries Contact
      <span>9345997736</span>
      <span>9629613455</span>
    </p>
  </Block>
);

export default Contact;
