import { motion } from "framer-motion"

export function ProjectCard({ project }) {
  return (
    <motion.div
      className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2 className="text-lg font-bold">{project.title}</h2>
      <p className="text-sm mb-2">{project.description}</p>
      <a 
        href={project.link} 
        target="_blank" 
        className="text-blue-500 hover:underline"
      >
        Ver projeto
      </a>
    </motion.div>
  )
}
