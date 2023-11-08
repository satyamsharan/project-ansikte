import Image from "next/image";

export default function Page() {
    return(
        
        <div className="pt-[52px] lg:pt-[64px] flex-col justify-center items-center fade-in">
            <Image className="opacity-20 m-auto" src={'/contact.gif'} alt="" width={300} height={225}/>
            <div className="text-center z-10 mt-[-150px] mb-[20px] relative" >Portfolio</div>
        
            <div className="p-4 m-auto text-xs text-justify z-10 max-w-[400px] relative">
                This portfolio represents my professional evolution, featuring a comprehensive overview of the organizations I&apos;ve been a part of, my project contributions, notable achievements, as well as my interests and hobbies.
            </div>
        </div>
    );
}