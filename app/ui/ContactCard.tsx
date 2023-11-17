import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaMobileAlt, FaQuestion, FaRegEnvelope } from "react-icons/fa";

interface ContactCardProps {
    accentColor?:number,
    icon:string,
    iconSize?:number,
    iconPadding?:number,
    title:string,
    link?:string,
    text?:string,
    reversed?:boolean,
    className?:string
}

export default function ContactCard({
        accentColor = 1,
        icon = 'linkedin',
        iconSize = 64,
        iconPadding = 18,
        title,
        link,
        text,
        reversed = false,
        className
    } : ContactCardProps){

    function selectIcon(icon:string){
        switch(icon){
            case 'github':
                return <FaGithub size={iconSize}/>;
            case 'linkedin':
                return <FaLinkedinIn size={iconSize}/>;
            case 'email':
                return <FaRegEnvelope size={iconSize}/>;
            case 'phone':
                return <FaMobileAlt size={iconSize}/>;
            default:
                return <FaQuestion size={iconSize}/>;
        }
    }

    function getIcon(){
        return (
            <div className={`back-a${accentColor} text-black text-center centered rounded-full m-1`} style={{'padding':iconPadding}}>
                <Link href={`${link}`} target="_blank">{selectIcon(icon)}</Link>
            </div>
        );
    }

    function getText(){
        return (
            <div className={`panelText m-3 ml-4 mr-4 ${reversed?'text-right':'text-left'}`}>
                <div className={`text-a${accentColor}`}><Link href={`${link}`} target="_blank">{title}</Link></div>
                <div className="text-xs">{text}</div>
            </div>
        );
    }

    return(
        <div className={`${className?className:''} m-5 flex ${reversed?'flex-row-reverse':'felx-row'} border-a${accentColor} items-center rounded-full opacity-70 hover:opacity-100`}>
            {getIcon()}
            {getText()}
        </div>
    );
}