import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="text-5xl"></div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://github.com/shivPratap007"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://www.linkedin.com/in/shiv-pratap-singh-waghel-23b925289/"
          target="_blank"
        >
          {" "}
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href="https://x.com/ShivPra11774746?t=MczbrTWgirIpxVAQ1Wkrmw&s=09"
          target="_blank"
        >
          <FaXTwitter />
        </motion.a>
      </div>
    </nav>
  );
}
