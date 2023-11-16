"use client"

import Image from "next/image";
import SkillWordCloud from "../ui/SkillWordCloud";
import TimeLine from "../ui/TimeLine";
import Certificaations from "../ui/Certifications";

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
                    <Certificaations />
                  </div>
                </div>
            </div>
        </div>
    );
}