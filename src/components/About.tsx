import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import aboutImg from "../assets/projects/about.jpg";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            className="flex items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={aboutImg}
              height={400}
              className="rounded"
              width={400}
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mt-4"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
