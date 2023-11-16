"use client"

import Image from "next/image";
import SkillWordCloud from "../ui/SkillWordCloud";
import TimeLine from "../ui/TimeLine";
import Certification from "../ui/Certification";
import Education from "../ui/Education";

export default function Page() {
  const data = [{
    name: 'B.Sc. Engineering',
    label: 'Electrical & Computer Science<br>Aug 2007 - May 2012',
    description: '',
    align:'left|right|center',
    color:1,
    icon:''

  },]


    return(
        <div className="fade-in">
            <div className="pt-[52px] lg:pt-[64px] flex-col justify-center items-center">
                <Image className="opacity-20 m-auto" src={'/contact.gif'} alt="" width={300} height={225}/>
                <div className="text-center z-10 mt-[-150px] mb-[20px] relative" >Portfolio</div>
            
                <div className="hidden p-4 m-auto text-xs text-justify z-10 max-w-[400px] relative">
                    This portfolio represents my professional evolution, featuring a comprehensive overview of the organizations I&apos;ve been a part of, my project contributions, notable achievements, as well as my interests and hobbies.
                </div>
            </div>
            <div className="p-4 max-w-5xl text-justify m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="pb-10">
                    <TimeLine />
                  </div>
                  <div className="space-y-4">
                    <SkillWordCloud />
                    <Certification />
                    <Education />
                  </div>
                </div>

                <hr/>
                <Image className="m-auto rounded-full pb-4 pt-4" src={'/pic.jpg'} alt="" width={200} height={200}/>
                <div className="text-center text-sm p-4">Satyam Sharan</div>
                <div className="text-justify text-xs pt-0 ">
                  <p>I am an innovator, technologist, developer, hacker & fighter. I have worked around the globe in various industries and used highly advanced technologies to solve complex problems. I have made high stake financial decisions easier for business leaders using machine learning and insightful analytics. I have architectured robust communication systems to make complex workflows simpler using secure enterprise paradigms. I have also worked in the medical technology industry with state-of-the-art research teams to make prenatal testing more reliable. I pride myself on my inventiveness, creativity, unique perspective and sharp intellect. I love paradoxes, puzzles, spotting patterns and identifying discrepancies between processes, systems or statements, which also happen to be my favourite way to kick back after a busy day.</p>
                </div>
                <div className="p-4 m-auto text-xs text-center">
                    Tack &nbsp;| &nbsp; ध्न्यावाद &nbsp;| &nbsp; Thank You
                </div>
            </div>
        </div>
    );
}