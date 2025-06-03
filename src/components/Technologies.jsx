import { FaAngular, FaAws, FaBootstrap, FaCss3Alt, FaDatabase, FaDocker, FaFigma, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiAntdesign, SiC, SiDotnet, SiJavascript, SiMui, SiMysql, SiNestjs, SiPostgresql, SiSass, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {

     const technologies = [
    { icon: TbBrandCSharp, color: "text-purple-600", duration: 3, name: "C#" },
    { icon: FaJava, color: "text-orange-600", duration: 2.5, name: "Java" },
    { icon: SiJavascript, color: "text-yellow-400", duration: 2.8, name: "JavaScript" },
    { icon: SiTypescript, color: "text-blue-400", duration: 3.2, name: "TypeScript" },
    { icon: FaPython, color: "text-blue-500", duration: 2.7, name: "Python" },
    { icon: FaReact, color: "text-cyan-400", duration: 2.6, name: "React" },
    { icon: FaAngular, color: "text-red-600", duration: 3.1, name: "Angular" },
    { icon: SiSass, color: "text-pink-400", duration: 2.9, name: "SCSS" },
    { icon: FaHtml5, color: "text-orange-500", duration: 3.3, name: "HTML" },
    { icon: FaCss3Alt, color: "text-blue-500", duration: 2.4, name: "CSS" },
    { icon: SiDotnet, color: "text-purple-500", duration: 3.4, name: ".NET Core" },
    { icon: FaNodeJs, color: "text-green-500", duration: 2.9, name: "Node.JS" },
    { icon: SiNestjs, color: "text-red-500", duration: 2.8, name: "Nest.JS" },
    { icon: FaDatabase, color: "text-red-700", duration: 3.6, name: "MSSQL" },
    { icon: SiMysql, color: "text-blue-600", duration: 2.5, name: "MySQL" },
    { icon: SiPostgresql, color: "text-blue-700", duration: 3.7, name: "PostgreSQL" },
    { icon: FaDocker, color: "text-blue-400", duration: 2.7, name: "Docker" },
    { icon: FaAws, color: "text-orange-400", duration: 3.2, name: "AWS" },
    { icon: FaFigma, color: "text-purple-400", duration: 2.9, name: "Figma" },
    { icon: FaBootstrap, color: "text-purple-600", duration: 3.1, name: "Bootstrap" },
    { icon: SiMui, color: "text-blue-500", duration: 2.6, name: "Material UI" },
    { icon: SiAntdesign, color: "text-blue-600", duration: 3.3, name: "Ant Design" }
     ];

  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                key={index}
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                title={tech.name}>
                    <IconComponent className={`text-7xl ${tech.color}`}/>
                </motion.div>
              );
            })}
        </motion.div>      
    </div>
  )
}

export default Technologies
