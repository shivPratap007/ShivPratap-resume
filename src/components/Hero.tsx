import profilePic from "../assets/projects/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10  px-2  text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Shiv Pratap{" "}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="tracking-tight mb-8 text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl"
            >
              Full Stack Developer
            </motion.span>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-justify mb-8 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-14">
          <motion.div
            variants={container(1)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={profilePic}
              alt="profilePic"
              className="rounded-2xl"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
