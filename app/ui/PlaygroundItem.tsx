"use client"
import {AnimatePresence, motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";
import useWindowSize from "../lib/useWindowSize";
import Modal from "./Modal";

interface PlaygroundItemProps{
    accentColor?:number,
    link?:string,
    linkTitle?:string,
    title:string,
    text:string
}

export default function PlaygroundItem({
    accentColor = 1,
    link,
    linkTitle,
    title,
    text,
}:PlaygroundItemProps){
    

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [started, setStarted] = useState(false);
    const [showModal, setShowModel] = useState(false);

    let paused = false;

    const itemAnimationControls = useAnimation()

    const size = useWindowSize();
    const ballSize:{width:number, height:number} = {width:100, height:100};
    let pageHeaderHight = 280;
    if(size.width<1024){
        ballSize.width=80;
        ballSize.height=80;
        pageHeaderHight=230; 
    }


    const startPoint:{x:number, y:number} = {x:((size.width-ballSize.width)/2), y:(((size.height-pageHeaderHight-ballSize.height)/2)+pageHeaderHight)};


    const lastPosition:{x:number, y:number} = {x:startPoint.x, y:startPoint.y};
    const nextPosition:{x:number, y:number} = {x:startPoint.x, y:startPoint.y};

    function calculateNextPosition(){
        console.log(size.width)
        console.log(ballSize.width)
        lastPosition.x=nextPosition.x;
        lastPosition.y=nextPosition.y;

        nextPosition.x = (Math.random()*(size.width-ballSize.width));
        nextPosition.y = (Math.random()*(size.height-ballSize.height));

        setX(nextPosition.x-lastPosition.x)
        setY(nextPosition.y-lastPosition.y);
        //console.log(accentColor +': '+ nextPosition.x+', '+ nextPosition.y)
    }


    
    if(!started){
        //useEffect(() => {
            setStarted(true);
            setTimeout(() => {
                console.log(accentColor +' - starting'+ x + ', ' + y)
                calculateNextPosition();
                console.log(accentColor +' - '+ x + ', ' + y)
                calculateNextPosition();
                console.log(accentColor +' - '+ x + ', ' + y)
                startAnimation();
            }, (accentColor*1000));

        //}, [started]);
    }


    function startAnimation(){
        itemAnimationControls.start({
            x:x,
            y:y
        })
    }

    function stopAnimation(){
        itemAnimationControls.stop();
    }

    function restartAnimation(){
        setTimeout(()=>{
            // console.log("Pau: "+paused);
            if(paused==false){
                calculateNextPosition();
                startAnimation();
            }
        },10)
    }

    function hoverStart(){
        paused = true;
        // console.log("hover Started: "+paused);
        stopAnimation();
    }

    function hoverEnd(){
        paused = false;
        // console.log("Hover Ended: "+paused);
        restartAnimation()
    }

    function animationCompleted(){
        // console.log("AC: "+paused);
        restartAnimation()
    }

    function onClick(){
        paused = true;
        // console.log("Clicked: "+paused);
        setShowModel(true);
    }

    return (
        <>
            <motion.div style={{width:`${ballSize.width}px`, height:`${ballSize.height}px`, left:`${startPoint.x}px`, top:`${startPoint.y}px`}} className={`playgroundItem back-a${accentColor} absolute rounded-full cursor-pointer text-white flex items-center justify-center`}
                animate={itemAnimationControls}
                onAnimationComplete={()=>{animationCompleted()}}
            onHoverStart={()=>{hoverStart()}}
            onHoverEnd={()=>{hoverEnd()}}
            onClick={()=>{onClick()}}
            transition={{ ease: "linear", duration: 5 }}
            >
                {title && <div className="itemTitle text-center text-sm">{title}</div>}
            </motion.div>

            <AnimatePresence
                initial={false}
                
            >
                {showModal && <Modal handleClose={()=>setShowModel(false)}  title={title?title:''} link={link} linkTitle={linkTitle} childrem={text}/>}
            </AnimatePresence>
        </>
    );
}