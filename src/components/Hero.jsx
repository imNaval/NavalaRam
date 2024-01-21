import "../styles/hero.scss"
import { motion } from "framer-motion"

const variantText = {
    initial:{
        x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration: 2,
            repeat:Infinity
        }
    }
}
const variantSlidingText = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-250%",
        transition:{
            duration: 20,
            repeat:Infinity,
            repeatType: "mirror"
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <div className="imageContainer">
                <img src="./hero.png" alt="hero" />
            </div>
            <motion.div className="introContainer" variants={variantText} initial="initial" animate="animate">
                <h2>Naval Nehra</h2>
                <h1>Web Developer | React developer</h1>
                <div className="buttons">
                    <button>See The Latest Works</button>
                    <button>Contact Me</button>
                </div>
                <motion.img src="./scroll.png" alt="scroll" variants={variantText} animate="scrollButton"/>
            </motion.div>

            <motion.div className="slidingTextContainer" variants={variantSlidingText} initial="initial" animate="animate">
                Programmer React JavaScript Developer
            </motion.div>
        </div>
    </div>
  )
}

export default Hero