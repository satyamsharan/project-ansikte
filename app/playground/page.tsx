import Image from "next/image";
import PlaygroundItem from "../ui/PlaygroundItem";

export default function Page() {
    return(
        <div className="h-screen w-screen">
            <div className="pt-[52px] lg:pt-[64px] flex-col justify-center items-center fade-in">
                
                <Image className="opacity-20 m-auto" src={'/contact.gif'} alt="" width={300} height={225}/>
                <div className="text-center z-10 mt-[-150px] mb-[20px] relative" >Playground</div>
            
                <div className="p-4 m-auto text-xs text-justify z-10 max-w-[400px] relative">
                Here, you can explore a diverse range of content that hasn&apos;t found a specific home on any other page. Whether it&apos;s a puzzle, an intriguing article, or a captivating video, this is the space where the yet-to-be-discovered resides.
                </div>
            </div>
            <PlaygroundItem accentColor={8} link="https://eyes.nasa.gov/apps/solar-system/#/home" title="Eyes on Solar System"/>
            <PlaygroundItem accentColor={2} link="https://youtu.be/tuR5NI-bvu8?si=aqXN1NhQUPqctYuA" title="Watch π (Pi)"/>
            <PlaygroundItem accentColor={5} link="https://github.com/chrislgarry/Apollo-11" title="Apollo 11 Source Code"/>
            <PlaygroundItem accentColor={4} link="https://www.lonelyplanet.com/articles/best-treks-in-the-world" title="World's 10 Best Treks"/>
            <PlaygroundItem accentColor={3} link="https://sudoku.com/killer/hard/" title="Killer Sudoku"/>
        </div>
    );
}