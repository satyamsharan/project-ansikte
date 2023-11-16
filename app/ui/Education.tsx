import Link from "next/link";
import { FaQuestion, FaUserGraduate, FaGraduationCap} from "react-icons/fa";
import { Tooltip } from "react-tooltip";

interface Education{
    name:string;
    field:string;
    institution:string;
    university:string;
    location:string;
    date:string;
    link?:string;
    description:string;
    color?:string;
    icon?:string;
}

export default function Education(){
    let iconPadding = 20;
    let iconSize = 48;

    const educationList:Education[] = [
        {
            name:'Masters of Technology (M.Tech)',
            field:'Engineering Systems',
            institution:'Faculty of Engineering',
            university:'Dayalbagh Educational Institute',
            location:'Agra, India & Remote',
            date:'2017-2021',
            link:'https://www.dei.ac.in/dei/engineering/',
            description:'In 2017, I made the decision to pursue my master\'s degree, opting for a part-time approach to seamlessly integrate my academic pursuits with my professional responsibilities. Specializing in Engineering Systems, my coursework provided invaluable insights into adopting a systems approach for the creation and management of complex systems.',
            color:'7',
            icon:'FaGraduationCap'
        },{
            name:'Bachelor of Science (Engineering)',
            field:'Electrical & Computer Science',
            institution:'Faculty of Engineering',
            university:'Dayalbagh Educational Institute',
            location:'Agra, India',
            date:'2007-2012',
            link:'https://www.dei.ac.in/dei/engineering/',
            description:'I completed my undergraduate studies in Electrical Engineering with Computer Science Specialization at Dayalbagh Educational Institute, Agra, India. Dayalbagh Educational Institute is one of the oldest university in India with a well-rounded curriculum of theoretical knowledge and hands-on project experiences.',
            color:'6',
            icon:'FaUserGraduate'
        }
    ];

    function getIcon(education: Education):React.ReactElement{
        let IconElement;
        switch(education.icon){
            case 'FaUserGraduate':
                IconElement = FaUserGraduate;
                break;
            case 'FaGraduationCap':
                IconElement = FaGraduationCap;
                break;
            default:
                IconElement = FaQuestion
        }
        return (
                <div className={`back-a${education.color} text-black text-center centered rounded-full m-auto w-[88px] `} style={{'padding':iconPadding}}>
                    {<IconElement size={iconSize}/>}
                </div>
        );
    }

    function getText(edu: Education): React.ReactElement{
        return (
            <div className={`pannelText mt-2 text-center`}>
                <div>
                    <div className={`text-xs text-bold text-a${edu.color}`}>{edu.name}</div>
                    <div className="text-xs text-white">{edu.field}</div>
                    <div className="text-xs text-white">{edu.institution}</div>
                    <div className="text-xs text-white">{edu.university}</div>
                    <div className="text-xs text-white">{edu.location}</div>
                    <div className="text-xs text-white">{edu.date}</div>
                </div>
            </div>
        );
    }

    function getLink(edu: Education): React.ReactElement{
        let linkElement = <></>;
        if(edu.link){
            linkElement = (
                <div className="text-right">
                    <Link href={`${edu.link}`} target="_blank" className="curson-pointer text-xs font-bold text-blue">Read more here ...</Link>
                </div>
            )
        }
        return linkElement;
      }

    function getEducationPanel(edu:Education, i:number){
        return(
            <>
                <div id={`edu-node-${i}`} className={`cursor-pointer p-2 m-1 items-center text-bold rounded-lg border-a${edu.color} w-[210px]`}>
                    {getIcon(edu)}
                    {getText(edu)}
                </div>

                <Tooltip id={`edu-tooltip-${i}`} className="max-w-[300px]" anchorSelect={`#edu-node-${i}`} openOnClick={true} variant="light" clickable={true}>
                    <div className="font-bold mb-2">{edu.name}</div>
                    <div className="text-xs mb-2">{edu.description}</div>
                    {getLink(edu)}
                </Tooltip>
            </>
        );
    }

    function getAllEducation(){
        const result: React.ReactElement[] = [];
        educationList.map((edu, index) => {
            result.push(
                <div key={`edu-${index}`}>
                    {getEducationPanel(edu, index)}
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
            <div className="text-center mb-2">My Education</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Discover the depth of my academic journey by exploring a detailed overview of my educational qualifications.</div>
            <div className="pt-2 pb-2">
              {getAllEducation()}
            </div>
        </div>
    );
}