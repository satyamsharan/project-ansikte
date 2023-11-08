import {motion, useAnimation } from "framer-motion"

export default function Backdrop({children, opacity, onClick}:{children:React.ReactNode, opacity?:number, onClick:any}){

    return(
        <motion.div
            className="backdrop"
            onClick={onClick}
            initial={{opacity:0}}
            animate={{opacity:opacity}}
            exit={{opacity:0}}
        >
            {children}
        </motion.div>
    );
}