import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            {/* <a href={project.link} target="_blank" className="w-32 h-32"> */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.1 }}
              className="w-full lg:w-1/4 "
            >
              {" "}
              <a href={project.link} target="_blank">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  src={project.image}
                  width={150}
                  height={350}
                  className="mb-6 rounded hover:cursor-pointer"
                  alt={project.title}
                />
              </a>
            </motion.div>
            {/* </a> */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a href={project.link} target="_blank">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              </a>
              <p className="text-justify mb-4 text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
