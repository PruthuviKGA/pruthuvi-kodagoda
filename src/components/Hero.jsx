import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/pruthuviKodagodaProfile1.png";
import resume from "../assets/pruthuviKodagodaResume.pdf"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay:delay}
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Pruthuvi Kodagoda
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Engineer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download 
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                        Download Resume
                    </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className="rounded-2xl"
                    src={profilePic} 
                    alt="Pruthuvi Kodagoda"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
