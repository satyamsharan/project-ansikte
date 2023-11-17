
interface Hobby{
    name:string;
    description:string;
    keywords:string[];
    color:string;
}

export default function Hobby(){
    const hobbyList:Hobby[] = [
        {
            name:'Embracing the Outdoors',
            description:'Embarking on a journey of exploration and self-discovery, my heart finds solace in the rhythm of outdoor pursuits. From the simple joy of a leisurely walk to the thrill of conquering untamed trails through trekking and backpacking, my free time is an ode to the great outdoors.',
            keywords:['Hiking/Trekking', 'Camping', 'Outdoor Life', 'Whittling'],
            color:"3"
        },{
            name:'Adrenaline and Elegance',
            description:'In this dynamic duality, I find adventure sports and cricket complementing each other. The adrenaline-fueled escapades provide a stark contrast to the measured grace of cricket, creating a well-rounded approach that keeps me on my toes, both physically and mentally.',
            keywords:['Paragliding', 'Kayaking', 'Adventure Sports', 'Cricket'],
            color:"6"
        },{
            name:'Paradox Pursuits',
            description:'In the world of paradoxes, I find beauty in contradictions. My passion for puzzles, paradoxes, intellectual games or even complex stores & movies are tools for self-discovery & cognitive mastery, a captivating exploration of logic, creativity, and the sheer joy of mental acrobatics.',
            keywords:['Puzzles', 'Intellectual Games', 'Paradoxes', 'Time-Travel Movies'],
            color:"7"
        },{
            name:'Gadget Enthusiast',
            description:'Beyond the screens, I delve into the realm of Gadgets, robotics, automation and smart home technologies, from intelligent thermostats to voice-activated assistants, is like stepping into a living space where every corner responds to your needs. ',
            keywords:['Gadgets', 'Home Automation', 'Robotics', 'Cutting Edge Tech'],
            color:"8"
        }
    ];

    function getHobby(hobby: Hobby): React.ReactElement{
        const keywordElementList: React.ReactElement[] = [];
        hobby.keywords.map((keyword, index)=>{
            keywordElementList.push(
                <div key={`hobbies-key-${index}`} className={`p-1 m-1 text-xs rounded-md border-a${hobby.color} text-a${hobby.color}`}>
                    {keyword}
                </div>
            );
        });
        return (
            <div className={`m-2 pl-2 pr-2 pt-1 pb-1 text-center rounded-md border-a${hobby.color} w-[225px]`}>
                <div>
                    <div className={`text-sm pb-2 text-a${hobby.color}`}>{hobby.name}</div>
                    <div className="flex flex-wrap justify-center pb-2">{keywordElementList}</div>
                    <div className="text-xs text-justify text-white">{hobby.description}</div>
                </div>
            </div>
        );
    }



    function getAllHobby(){
        const result: React.ReactElement[] = [];
        hobbyList.map((hobby, index) => {
            result.push(
                <div key={`edu-${index}`}>
                    {getHobby(hobby)}
                </div>
            );
        })
        return (
            <div className="flex flex-wrap justify-center">
                {result}
            </div>
        );

    }
    return (
        <div className="p-1">
            <div className="text-center mb-2">Hobbies</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">In the tapestry of my life, free time is the canvas where I weave the threads of my diverse interests and hobbies. Here's a peek into the kaleidoscope of activities that occupy my moments of leisure.</div>
            <div className="pt-2 pb-2">
              {getAllHobby()}
            </div>
        </div>
    );
}