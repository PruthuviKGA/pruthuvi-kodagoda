import aboutImg from "../assets/about.jpg";
import { EXPERIENCES2 } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Experience</motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about"/>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                <h6 className="mb-2 font-semibold">{EXPERIENCES2.role} - {EXPERIENCES2.company}</h6>
                <p className="mb-6 text-sm text-neutral-400">{EXPERIENCES2.year}</p>
                <p className="mb-4 text-neutral-400">{EXPERIENCES2.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                {EXPERIENCES2.technologies.map((tech,index) =>(
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
                </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Experience
