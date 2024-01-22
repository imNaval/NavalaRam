import { useRef } from "react"
import "../styles/services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    const ref=useRef(null);
    const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className='services' 
        variants={variants} 
        initial="initial" 
        // animate="animate"
        whileInView="animate"
        // ref={ref}
        // animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants} >
            <p>
                I focus on Developing Industry level <br />
                Web application 
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img alt="people" src="people.webp" />
                <h1> <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1> <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{backgroundColor:"gray", color:"black"}}>
                <h2>heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>button</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"gray", color:"black"}}>
                <h2>heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>button</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"gray", color:"black"}}>
                <h2>heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>button</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"gray", color:"black"}}>
                <h2>heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>button</button>
            </motion.div>

        </motion.div>

    </motion.div>
  )
}

export default Services