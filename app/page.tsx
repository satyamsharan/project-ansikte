"use client"
import { useState } from 'react'
import LorenzAttractor from './ui/LorenzAttractor'

export default function Page() {

  const [showInfoState, setShowInfoState] = useState(0);
  const [showInfoButton, setShowInfoButton] = useState(false);

  setTimeout(()=>{
    setShowInfoButton(true);
  },2000);

  return (
    <div className="h-screen w-screen" >
      <LorenzAttractor />
      <div className={(!showInfoButton?`hidden`:`fadeIn`)+` info opacity-60 top-[40px] lg:top-[100px] max-w-sm lg:max-w-lg select-none`}>
        <div className='p-6 text-center mt-[10px]'>
          <div className={`cursor-pointer text-white text-xs lg:text-base`} onClick={()=>setShowInfoState(showInfoState==1?2:1)}>Lorenz Attractor</div>
          <div className={(showInfoState==0?`hidden `:``)+(showInfoState==1?`fadeIn `:`fadeOut `)+` p-3 text-center rounded-lg border border-transparent transition-colors border-neutral-50 bg-neutral-50 text-right`}>
            <button className='text-black close' onClick={()=>setShowInfoState(2)}> &#x2573; </button>
            <p className='text-xs text-black text-justify'>The Lorenz system is a system of ordinary differential equations first studied by mathematician and meteorologist Edward Lorenz. It is notable for having chaotic solutions for certain parameter values and initial conditions. In particular, the Lorenz attractor is a set of chaotic solutions of the Lorenz system. In popular media the &quot;butterfly effect&quot; stems from the real-world implications of the Lorenz attractor, namely that several different initial chaotic conditions evolve in phase space in a way that never repeats, so all chaos is unpredictable. </p>
            <p className='mt-2  text-xs text-black font-bold'><a target="_blank" href='https://en.wikipedia.org/wiki/Lorenz_system'>Read more here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
