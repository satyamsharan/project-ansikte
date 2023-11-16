import Link from "next/link";
import { FaQuestion, FaUserGraduate, FaSnowflake, FaJira, FaServer, FaRProject, FaRobot } from "react-icons/fa";

interface Certificate{
    name:string;
    issuer:string;
    credential?:string;
    date:string;
    link?:string;
    description:string;
    color?:string;
    icon?:string;
}

export default function Certification(){
    let iconPadding = 12;
    let iconSize = 32;
    const certtificationList:Certificate[] = [
        {
            name:'SnowPro Core',
            issuer:'Snowflake',
            credential:'S0017592',
            date:'Apr 2023',
            link:'https://www.credly.com/badges/8e7e490d-b28d-4b40-a98d-63173d1e9395/linked_in_profile',
            description:'',
            icon:'FaSnowflake',
            color:'1'
        },{
            name:'Technology Architect',
            issuer:'Accenture',
            date:'Dec 2017',
            description:'',
            icon:'FaServer',
            color:'2'
        },{
            name:'Agile Professional',
            issuer:'Accenture',
            credential:'636494349',
            date:'Jan 2016',
            description:'',
            icon:'FaJira',
            color:'3'
        },{
            name:'R Programmer',
            issuer:'Coursera',
            credential:'K32CGYYJLA',
            date:'Oct 2015',
            link:'https://www.coursera.org/account/accomplishments/verify/K32CGYYJLA',
            description:'',
            icon:'FaRProject',
            color:'4'
        },{
            name:'Artificial Intelligence',
            issuer:'Udacity',
            date:'Dec 2011',
            link:'/AICertification.pdf',
            description:'',
            icon:'FaRobot',
            color:'5'
        }
    ];

    function getIcon(certificate: Certificate):React.ReactElement{
        let IconElement;
        switch(certificate.icon){
            case 'FaUserGraduate':
                IconElement = FaUserGraduate;
                break;
            case 'FaSnowflake':
                IconElement = FaSnowflake;
                break;
            case 'FaJira':
                IconElement = FaJira;
                break;
            case 'FaServer':
                IconElement = FaServer;
                break;
            case 'FaRProject':
                IconElement = FaRProject;
                break;
            case 'FaRobot':
                IconElement = FaRobot;
                break;
            default:
                IconElement = FaQuestion
        }
        return (
                <div className={`back-a${certificate.color} text-black text-center centered rounded-full m-auto max-w-[${2*iconPadding+iconSize}px]`} style={{'padding':iconPadding}}>
                    {<IconElement size={iconSize}/>}
                </div>
        );
    }

    function getText(certificate: Certificate): React.ReactElement{
        let titleElement = <div className={`text-xs text-bold text-a${certificate.color}`}>{certificate.name}</div>;
        if(certificate.link){
            titleElement = (
                <Link href={certificate.link?certificate.link:''} target="_blank">
                    {titleElement}
                </Link>);
        }
        return (
            <div className={`pannelText mt-2 text-center`}>
                <div>
                    {titleElement}
                    <div className="text-xs text-white">{certificate.issuer}</div>
                    <div className="text-xs text-white">{certificate.date}</div>
                </div>
            </div>
        );
    }

    function getCertificatePanel(certificate:Certificate, index:number){
        return(
            <div id={`certificate-node-${index}`} className={`p-2 m-1 items-center text-bold rounded-lg border-a${certificate.color} max-w-[85px]`}>
                {getIcon(certificate)}
                {getText(certificate)}
            </div>
        );

    }


    function getAllCertificates(){
        const result: React.ReactElement[] = [];
        certtificationList.map((certificate, index) => {
            result.push(getCertificatePanel(certificate, index));
        })
        return (
            <div className="flex flex-wrap justify-center">
                {result}
            </div>
        );

    }

    return (
        <div className="p-1">
            <div className="text-center mb-2">My Certifications</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Delve into a compilation showcasing my professional certifications, providing a detailed overview of the diverse skills and qualifications I have acquired throughout my career.</div>
            <div className="pt-2 pb-2">
              {getAllCertificates()}
            </div>
        </div>
    );
}