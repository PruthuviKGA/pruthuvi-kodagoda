import { PUBLICATION } from "../constants"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Publication = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h1 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration:0.5}}
    className="my-20 text-center text-4xl">Publications</motion.h1>
    <div>
        {PUBLICATION.map((publication, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration:1 }}
            className="w-full lg:w-1/4 flex flex-col items-center">
                <img src={publication.image} width={150} height={150} alt={publication.title} className="mb-6 rounded"/>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration:1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{publication.title}</h6>
            <p className="mb-6 text-sm text-neutral-400">Authors: {publication.authors}</p>
            <p className="mb-4 text-neutral-400">{publication.description}</p>
            </motion.div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Publication
