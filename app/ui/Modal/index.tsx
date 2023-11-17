
import {motion} from "framer-motion"
import Backdrop from "../Backdrop";
import {FaXmark} from "react-icons/fa6"
import Link from "next/link";

export default function Modal({
    title, 
    childrem,
    linkTitle = "Read more here ...",
    opacity = .97,
    link,
    handleClose}:{title:string, childrem: React.ReactNode, linkTitle?:string, link?:string, opacity?:number, handleClose:any}){

    const dropIn ={
        hidden:{
            opacity:0,
            y:"-100vh"
        },
        visible:{
            opacity:1,
            y:"0",
            transition:{
                durationn:.1,
                type:"spring"
            }
        },
        exit:{
            opacity:0,
            y:"100vh"
        }
    }
    return(
        <Backdrop opacity={opacity} onClick={handleClose}>
            <motion.div
                onClick={(e)=>e.stopPropagation()}
                className="modal rounded-lg max-w-sm lg:max-w-lg select-none"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="p-4">
                    <div className="flex item-center justify-between mb-2">
                        <div className="">{title}</div>
                        <button onClick={handleClose}><FaXmark /></button>
                    </div>
                    
                    <div className="text-xs mb-2 text-justify">
                        {childrem}
                    </div>

                    <div className="text-right">
                        {link && <Link className="text-xs " href={`${link}`} target="_blank">{linkTitle}</Link>} 
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    );
}