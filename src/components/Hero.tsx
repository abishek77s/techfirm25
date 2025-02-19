import { motion } from "framer-motion";
import Iridescence from "./Iridescence";

export default function Hero() {
  return (
    // Changed to flex container with min-h-screen and removed pt-24
    <div className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Iridescence background */}
      <div className="absolute inset-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0" />

      {/* Main content container - adjusted padding and centering */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] mx-auto mb-6"
        >
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="1110"
            height="144"
            fill="none"
            viewBox="0 0 1110 144"
          >
            <path
              fill="#0B0028"
              d="M.736.924h130.688V24.22H79.072V89.5H53.088V24.22H.736V.924Zm146.141 0h126.592V22.3H171.837v12.672h90.88v20.736h-90.88v12.416h101.632V89.5H146.877V.924Zm281.061 10.88-15.104 17.792c-4.992-5.376-12.16-6.4-22.528-6.4h-53.12c-16.256 0-25.344 7.552-25.344 22.016v.128c0 14.336 9.216 21.888 25.344 21.888h53.12c10.752 0 17.664-1.152 22.528-6.4l15.104 17.792c-8.96 8.576-19.328 11.264-37.632 11.264h-53.12c-31.744 0-50.304-16.256-50.304-44.544v-.128c0-28.416 18.56-44.672 50.304-44.672h53.12c17.92 0 28.544 2.56 37.632 11.264Zm40.548 22.4h88.96V.924h25.984V89.5h-25.984V56.476h-88.96V89.5h-25.984V.924h25.984v33.28ZM604.877.924h126.592V23.58H629.837v16.128h90.88v22.144h-90.88V89.5h-24.96V.924ZM773.236 89.5h-25.984V.924h25.984V89.5Zm160.012 0H904.96l-16-25.344h-69.248V89.5h-24.96V.924h94.592c31.872 0 41.6 14.208 41.6 32v.128c0 11.904-4.48 22.016-17.408 27.264L933.248 89.5Zm-43.904-66.432h-69.632v19.84h69.632c12.288 0 16.768-2.816 16.768-9.856v-.128c0-6.912-4.48-9.856-16.768-9.856ZM972.81.924l56.45 49.152L1085.71.924h23.68V89.5h-25.73V33.564L1034.38 76.7h-10.37l-49.28-43.136V89.5h-25.728V.924h23.808ZM479.215 132.613c0 3.282-3.856 4.289-6.879 5.028-1.629.386-2.93.773-3.399 1.347h10.02v4.5h-19.723v-2.66c0-3.597 5.309-4.933 9.364-5.894 2.472-.61 4.453-1.09 4.453-1.922 0-.668-1.008-1.16-3.2-1.16-2.285.023-4.242.363-4.207 1.828h-6.164c0-5.309 4.149-6.328 10.114-6.328 6.058 0 9.621 1.418 9.621 5.261Zm63.268 3.575v-1.149c0-1.277-.48-2.039-1.195-2.496-.738-.434-1.676-.574-2.648-.574-1.899 0-3.844.527-3.844 3.07v1.149c0 1.277.469 2.062 1.207 2.496.738.433 1.687.586 2.637.586 1.921 0 3.843-.528 3.843-3.082Zm.059-8.45c3.281.715 6.094 2.649 6.094 6.914v1.922c0 2.965-1.336 4.805-3.27 5.883-.867.469-1.805.809-2.824 1.031-1.277.282-2.625.387-3.902.387-1.278 0-2.625-.105-3.891-.387-3.281-.715-6.094-2.636-6.094-6.914v-1.922c0-2.964 1.336-4.804 3.27-5.871.855-.48 1.804-.82 2.824-1.043 1.266-.281 2.613-.386 3.891-.386 1.277 0 2.625.105 3.902.386Zm75.515 4.875c0 3.282-3.856 4.289-6.879 5.028-1.629.386-2.93.773-3.399 1.347h10.02v4.5h-19.723v-2.66c0-3.597 5.309-4.933 9.363-5.894 2.473-.61 4.454-1.09 4.454-1.922 0-.668-1.008-1.16-3.2-1.16-2.285.023-4.242.363-4.207 1.828h-6.164c0-5.309 4.149-6.328 10.113-6.328 6.059 0 9.622 1.418 9.622 5.261Zm56.213.832h1.582c6.282 0 11.625.422 11.625 5.227 0 1.641-.855 2.918-2.554 3.832-1.699.914-4.09 1.371-7.184 1.371-6.105 0-10.242-1.055-10.242-6.305h6.152c-.023 1.676 1.934 1.606 4.336 1.641 2.309 0 3.328-.375 3.328-1.207 0-1.008-.621-1.781-5.461-1.781h-8.355v-.035l1.922-8.45h16.898v4.231h-11.718l-.329 1.476Z"
            />
          </svg>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mt-2 md:text-2xl text-black mb-12 max-w-3xl mx-auto font-geist-mono"
        >
          Join us for an immersive journey through technology, innovation, and
          creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            target="_noblank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeOjl14BQ8aeuD1aC1JboxM-H4-DteuraesyQW8mHUGFGLV-g/viewform?usp=send_form"
            className="bg-black md:text-lg sm:text-xs backdrop-blur-2xl text-white px-8 py-3 rounded-full font-semibold border border-white/20 shadow-lg transition-transform duration-300 hover:bg-white/5 hover:text-black hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="/events"
            className="bg-white md:text-lg sm:text-xs  backdrop-blur-2xl text-black px-8 py-3 rounded-full font-semibold border border-white/20 shadow-lg transition-transform duration-300 hover:bg-white/5 hover:scale-105"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
    </div>
  );
}
