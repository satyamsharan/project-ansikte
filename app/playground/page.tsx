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
            <PlaygroundItem accentColor={8} link="https://eyes.nasa.gov/apps/solar-system/#/home" title="Eyes on Solar System" linkTitle="Check out the website here ..." text="Embark on an awe-inspiring journey through our cosmos as you explore this meticulously crafted 3D model of the solar system. Immerse yourself in its breathtaking accuracy, with meticulously scaled orbits that bring the celestial dance of the planets to life. You can paly with the rotation rates and observe the current relative positions of these celestial bodies in real-time. It also offers visual glimpses of some space missions such as 'Asteroid and Comet Missions'. Credits to NASA. "/>
            <PlaygroundItem accentColor={2} link="https://youtu.be/tuR5NI-bvu8?si=aqXN1NhQUPqctYuA" title="Dance of the π (Pi)" linkTitle="Check the video here ..." text="Dive into the captivating world of mathematics with an intricately designed visual representation that beautifully showcases the enigmatic nature of irrationality by the mathematical constant Pi. This stunning creation features two line segments, one rotating at a speed precisely π times faster than the other, resulting in truly astonishing patterns. Credit goes to the skilled creator of this video, Chirag Dudhat."/>
            <PlaygroundItem accentColor={5} link="https://nextjs.org/docs" title="Try Next.js framework" linkTitle="Checkout the features and documentation here ..." text="My experience with Next.js has been incredibly positive. Next.js, a versatile React framework designed for full-stack web application development, has proven to be a powerful tool in my web development arsenal. I leverage React Components for crafting dynamic user interfaces and harness the additional features and optimizations offered by Next.js to create web applications that are both efficient and feature-rich."/>
            <PlaygroundItem accentColor={4} link="https://www.lonelyplanet.com/articles/best-treks-in-the-world" title="World's 10 Best Treks" text="Passion for the great outdoors runs deep within me, and the profound joy of embarking on extended hikes and immersive trails resonates at the core of my adventurous spirit. In recent months, I've wholeheartedly delved into the art of connecting with nature, honing my bushcraft skills, and forging a more profound bond with the wilderness. Here, I found a list of some of the most awe-inspiring trails that span the globe, each a masterpiece of nature's grandeur. It is my unwavering aspiration to embark on each of these remarkable journeys, fostering a profound connection with the natural world that fuels my soul. Credits to Joe Bindloss and the Lonely Planet"/>
            <PlaygroundItem accentColor={3} link="https://sudoku.com/killer/hard/" title="Try Killer Sudoku" linkTitle="Try the Killer Sudoku here ..." text="Puzzles have always captivated my interest, and recently, I've delved into the captivating world of Killer Sudoku. Killer Sudoku, a delightful numerical puzzle, is a close relative of the classic Sudoku. The challenging levels of Killer Sudoku adhere to the same set of rules as the others, with the key distinction being the scarcity of initial numbers on the grid. This unique feature elevates the difficulty and demands a more extended gameplay session to complete the grid. It's an ideal choice for enthusiasts seeking a fresh challenge beyond traditional Sudoku, ready to take their puzzle-solving skills to the next level."/>
        </div>
    );
}