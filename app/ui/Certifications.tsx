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

export default function Certificaations(){
    let iconPadding = 12;
    let iconSize = 32;
    const certtificationList:Certificate[] = [
        {
            name:'SnowPro Core Certification',
            issuer:'Snowflake',
            credential:'S0017592',
            date:'Apr 2023',
            link:'https://www.credly.com/badges/8e7e490d-b28d-4b40-a98d-63173d1e9395/linked_in_profile',
            description:'',
            icon:'FaSnowflake',
            color:'1'
        },{
            name:'Technology Architect Certification',
            issuer:'Accenture',
            date:'Dec 2017',
            description:'',
            icon:'FaServer',
            color:'2'
        },{
            name:'Agile Professional Certification',
            issuer:'Accenture',
            credential:'636494349',
            date:'Jan 2016',
            description:'',
            icon:'FaJira',
            color:'3'
        },{
            name:'R Programmer Certification',
            issuer:'Coursera',
            credential:'K32CGYYJLA',
            date:'Oct 2015',
            link:'https://www.coursera.org/account/accomplishments/verify/K32CGYYJLA',
            description:'',
            icon:'FaRProject',
            color:'4'
        },{
            name:'Artificial Intelligence Certification',
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
            <div className={`text-white back-black text-center centered rounded-full m-1`} style={{'padding':iconPadding}}>
                {<IconElement size={iconSize}/>}
            </div>
        );
    }

    function getText(certificate: Certificate): React.ReactElement{
        let titleElement = <div className={`text-sm text-bold text-white`}>{certificate.name}</div>;
        if(certificate.link){
            titleElement = (
                <Link href={certificate.link?certificate.link:''} target="_blank">
                    {titleElement}
                </Link>);
        }
        return (
            <div className={`pannelText m-2 text-left`}>
                <div>
                    {titleElement}
                    <div className="text-xs text-white">Issuer: {certificate.issuer + (certificate.credential?(', Credentials: ' + certificate.credential):'')}</div>
                    <div className="text-xs text-white">{certificate.date}</div>
                </div>
            </div>
        );
    }

    function getCertificatePanel(certificate:Certificate, index:number){
        return(
            <div id={`certificate-node-${index}`} className={`flex felx-row ml-auto back-a${certificate.color} items-center rounded-xl text-bold`}>
                {getIcon(certificate)}
                {getText(certificate)}

                {/*
                <Tooltip id={`timeline-tooltip-${index}`} className="max-w-[300px]" anchorSelect={`#timeline-node-${index}`} openOnClick={true} variant="light" clickable={true}>
                    <div className="font-bold mb-2">{node.name}</div>
                    <div className="text-xs mb-2">{node.description}</div>
                    {getLink(node)}
                </Tooltip>
                {node.type=='block'?getIcon(node):''} */}
            </div>
        );

    }


    function getAllCertificates(){
        const result: React.ReactElement[] = [];
        certtificationList.map((certificate, index) => {
            result.push(
                <div key ={index} className="lg:ml-8 lg:mr-8 mb-2">
                    {getCertificatePanel(certificate, index)}
                </div>
            );
        })
        return result;

    }

    return (
        <div className="p-1">
            <div className="text-center mb-2">My Certifications</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Delve into a compilation showcasing my professional certifications, providing a detailed overview of the diverse skills and qualifications I have acquired throughout my career.</div>
            <div className="p-2 lg:pl-10 lg:pr-10">
              {getAllCertificates()}
            </div>
        </div>
    );
}