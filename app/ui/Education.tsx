import Link from "next/link";
import { FaQuestion, FaUserGraduate, FaSnowflake, FaJira, FaServer, FaRProject, FaRobot } from "react-icons/fa";

interface Education{
    name:string;
    issuer:string;
    credential?:string;
    date:string;
    link?:string;
    description:string;
    color?:string;
    icon?:string;
}

export default function Education(){


    function getAllEducation(){
        return(
            <></>
        );
    }
    return (
        <div className="p-1">
            <div className="text-center mb-2">My Education</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Discover the depth of my academic journey by exploring a detailed overview of my educational qualifications.</div>
            <div className="p-2 lg:pl-10 lg:pr-10">
              {getAllEducation()}
            </div>
        </div>
    );
}