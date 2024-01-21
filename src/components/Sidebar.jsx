import { useState } from "react"
import "../styles/sidebar.scss"
import {motion} from 'framer-motion'

const ToggleButton = ({setOpen}) =>{
    return(
        <button onClick={()=> setOpen(prev => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
                />
                <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                />
                <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
                />
            </svg>
        </button>
    )
}


const variantsLinks = {
    open:{
        transition:{
            staggerChildren: 0.1
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const variantsItem = {
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0
    }
};
const Links =() =>{
    const items = ["Homepage", "Services", "Projects", "Contact"]
    return (
        <motion.div className="links" variants={variantsLinks}>
            {
                items.map(item => <motion.a href={`#${item}`} key={item} variants={variantsItem} whileHover={{scale:1.1}} whileTap={{scale:0.91}}>
                    {item}
                </motion.a>)
            }
        </motion.div>
    )
}


const variantsSidebar = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type: "spring",
            stiffness:20
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    }
};
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variantsSidebar}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar