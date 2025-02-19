import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    icon: "⭐",
    title: "Technical",
    text: "Show off your skills in coding, design, and innovation through exciting competitions. Compete, create, and push the limits of technology!",
  },
  {
    icon: "✨",
    title: "Non-Technical",
    text: "Express your creativity with fun contests like photography, memes, and talent shows. Entertain, impress, and enjoy!",
  },
  {
    icon: "💡",
    title: "Online",
    text: "Join the action and dive into Bermuda with your",
  },
];

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="text-white min-h-1.5 p-4 lg:px-24 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center py-10"
      >
        <h1 className="text-4xl font-bold mb-4 font-geist">Events</h1>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 rounded-xl shadow-lg border border-gray-500/50 relative backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <div className="absolute -top-4 right-4 bg-transparent px-2 text-lime-400 text-2xl">
              {section.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2  font-geist">
              {section.title}
            </h2>
            <p className="text-gray-300 font-geist-mono">{section.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-4 mb-8 mt-16 text-lg justify-center"
      >
        <button
          onClick={() => navigate("/events")}
          className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300 font-geist-mono"
        >
          Explore
        </button>
        <a
          target="_noblank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOjl14BQ8aeuD1aC1JboxM-H4-DteuraesyQW8mHUGFGLV-g/viewform?usp=send_form"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300 font-geist-mono"
        >
          Register
        </a>
      </motion.div>
    </div>
  );
}
