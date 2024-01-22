import { useRef } from "react"
import "../styles/projects.scss"
import {projects} from "../utils/projects"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const Project = ({item}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref, 
        // offset:["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img alt="project-image" src={item?.img} />
                    </div>
                    <motion.div style={{y}} className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Live</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className='projects' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX: scaleX}}></motion.div>
        </div>
        {
            projects.map(project => <Project key={project.id} item={project} />)
        }
    </div>
  )
}

export default Projects