"use client"
import { Tooltip } from "react-tooltip";
import { FaQuestion, FaVial, FaCarSide, FaGreaterThan, FaTv, FaUserGraduate, FaMicrochip, FaFont } from "react-icons/fa";
import Link from "next/link";


interface TimeLineProps{ 
    name?: string; 
    label?: string; 
    duration?: string; 
    description?: string; 
    alignRight?: boolean; 
    type?: string;
    color: any; 
    link?: string;
    icon?: string;
}

export default function TimeLine(){
    let iconPadding = 12;
    let iconSize = 32;
    const data:TimeLineProps[] = [{
        name: 'B.Sc. Engineering, Dayalbagh Educational Inst. Agra, India',
        label: 'Electrical & Computer Science',
        duration: 'Aug 2007 - May 2012',
        description: 'I completed my undergraduate studies in Electrical Engineering with Computer Science Specialization at Dayalbagh Educational Institute, Agra, India. Dayalbagh Educational Institute is one of the oldest university in India with a well-rounded curriculum of theoretical knowledge and hands-on project experiences.',
        alignRight: false,
        color:1,
        link:'https://www.dei.ac.in/dei/',
        icon:'FaUserGraduate'

      }, {
        name: 'HCL, Noida, India',
        label: 'Software Engineer',
        duration: 'Jul 2012 - Jul 2014',
        description: 'Following the completion of my bachelor\'s degree, I secured a campus placement at HCL, a prominent Indian multinational information technology services and consulting company located in Noida, India. During my tenure at the company, I actively engaged in enterprise application development, gaining invaluable hands-on experience in crafting robust solutions for complex business needs. This opportunity not only honed my technical skills but also provided me with insights into the dynamic and innovative landscape of the IT industry.',
        alignRight: true,
        color:2,
        link:'https://hcl.com/',
        icon:'FaTv'
        
      },{
        name: 'HCL, Noida, India',
        label: 'Senior Software Engineer',
        duration: 'Aug 2014 - Dec 2014',
        description: 'After two years of dedicated service, I was honored to receive a promotion to the position of Senior Software Engineer.',
        alignRight: false,
        color:2,
        link:'https://hcl.com/',
        icon:'FaTv'
        
      },{
        name: 'Accenture, Gurugram, India',
        label: 'Senior Analyst',
        duration: 'Feb 2015 - Nov 2016',
        description: 'In pursuit of expanding my expertise, I joined Accenture in Gurugram, India, where I immersed myself in the dynamic realms of Data Analytics, Predictive Analysis, Forecasting Techniques, Machine Learning and AI. My role involved applying these advanced methodologies to address the unique challenges of diverse clientele across Australia, Europe, and North America.',
        alignRight: true,
        color:3,
        link:'https://newsroom.accenture.com/news/2015/accenture-launches-advanced-analytics-applications-platform-to-deliver-actionable-insights-to-decision-makers',
        icon:'FaGreaterThan'
        
      },{
        name: 'Accenture, Gurugram, India',
        label: 'Specialist (Team Lead)',
        duration: 'Dec 2016 - Mar 2018',
        description: 'Soon after, I was entrusted with the responsibility of leading a compact yet highly skilled team comprising 5-8 experts. Guiding this team allowed me to cultivate collaborative problem-solving approaches, ensuring not only the swift resolution of issues but also fostering a cohesive and high-performing unit dedicated to delivering exceptional results.',
        alignRight: false,
        color:3,
        link:'https://www.accenture.com/au-en/case-studies/applied-intelligence/telstra',
        icon:'FaGreaterThan'
        
      },{
        name: 'M.Tech, Dayalbagh Educational Inst. Agra, India',
        label: 'Engineering Systems',
        duration: 'Aug 2017 - Dec 2020',
        description: 'In 2017, I made the decision to pursue my master\'s degree, opting for a part-time approach to seamlessly integrate my academic pursuits with my professional responsibilities. Specializing in Engineering Systems, my coursework provided invaluable insights into adopting a systems approach for the creation and management of complex systems. ',
        alignRight: true,
        color:1,
        link:'https://www.dei.ac.in/dei/',
        icon:'FaUserGraduate'

      },{
        name: 'Accenture, Bologna, Italy',
        label: 'Specialist (Team Lead)',
        duration: 'Apr 2018 - Nov 2019',
        description: 'In 2018, my outstanding contributions to the field of data analytics opened doors to a remarkable opportunity — I joined a core product development team based in Bologna and Milan, Italy. Collaborating on the creation of a cutting-edge, cloud-enabled data analytics and machine learning platform, our efforts transcended geographical boundaries, impacting over 80 clients worldwide. This experience not only broadened my technical expertise but also allowed me to play a pivotal role in the global deployment of a transformative solution, further solidifying my commitment to innovative and impactful work.',
        alignRight: false,
        color:4,
        link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
        icon:'FaGreaterThan'
        
      },{
        name: 'Accenture, Bologna, Italy',
        label: 'Associate Manager',
        duration: 'Dec 2019 - Mar 2020',
        description: 'In a span of just 1.5 years since joining the product development team, I achieved a significant milestone — I was promoted to Associate Manager. In this elevated role, I assumed leadership of a dynamic team entrusted with the development of innovative functionalities for the platform. This opportunity not only underscored my rapid professional growth but also allowed me to steer and contribute to the evolution of the product, reinforcing my commitment to driving excellence and continuous improvement within the team and the platform.',
        alignRight: true,
        color:4,
        link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
        icon:'FaGreaterThan'
        
      },{
        name: 'PerkinElmer, Stockholm, SE',
        label: 'Consultant',
        duration: 'Jul 2020 - Apr 2022',
        description: 'In my capacity as a Senior Consultant at AFRY, I had the privilege of collaborating closely with the R&D team at PerkinElmer. During this engagement, I played a pivotal role in contributing to the development of novel features within their renowned Non-Invasive Prenatal Testing (NIPT) system.',
        alignRight: false,
        color:6,
        link:'https://www.perkinelmer.com/category/vanadis-cfdna-platform',
        icon:'FaVial'
        
      },{
        name: 'Volvo Cars, Gothenburg, SE',
        label: 'Consultant',
        duration: 'May 2022 - Oct 2022',
        description: 'In my capacity as a Senior Consultant at AFRY, I collaborated closely with the Compliance Team at Volvo Cars, contributing significantly to the development of a cutting-edge Compliance Management System - Compliance Navigator. The experience not only deepened my understanding of regulatory frameworks but also reinforced my dedication to delivering forward-thinking solutions in the automotive industry.',
        alignRight: true,
        color:6,
        link:'https://www.volvocars.com/se/',
        icon:'FaCarSide'
        
      },{
        name: 'Flowity, Stockholm, SE',
        label: 'Consultant',
        duration: 'Oct 2022 - Feb 2023',
        description: 'While at AFRY, I actively participated in the in-house development of Flowity, an innovative AI tool harnessing computer vision to deliver crucial insights. Today, Flowity stands as a well-established player in the industry, successfully catering to a diverse clientele. Its evolution from inception to a trusted solution reflects our commitment to delivering innovative, AI-driven insights that have found resonance and value across multiple sectors.',
        alignRight: false,
        color:6,
        link:'https://www.flowity.com/',
        icon:'FaMicrochip'
        
      },{
        name: 'Revvity, Stockholm, SE',
        label: 'Consultant',
        duration: 'May 2023 - Oct 2023',
        description: 'As the Genomics business of PerkinElmer underwent a transformative transition to become the new entity, Revvity, I was entrusted once again as a senior consultant with a pivotal role. This time, my responsibilities extended to guiding Revvity through a comprehensive rebranding process for their multiple application stacks. In this capacity, I ensured a seamless and high-quality transition, contributing to the establishment of Revvity as a distinct and dynamic player in the industry, aligned with its renewed vision and identity.',
        alignRight: true,
        color:6,
        link:'https://www.revvity.com/',
        icon:'FaVial'
        
      },{
        name: 'AFRY, Stockholm, Sweden',
        label: 'Senior Consultant',
        duration: 'Apr 2020 - Ongoing',
        description: 'With an enriching tenure of over 5 years at Accenture, I embarked on a new chapter in my career by joining AFRY in Stockholm, Sweden. Renowned for its high ranking in the \'Great Place to Work\' index, AFRY boasts a robust foundation in engineering consulting spanning across diverse industries. As I approach my fourth year with AFRY, my commitment remains steadfast in assisting our valued customers. I am dedicated to delivering impactful solutions that empower them to not only achieve but also sustain operational excellence. This ongoing journey at AFRY has been instrumental in honing my skills and deepening my understanding of how strategic consulting can truly make a lasting difference for our clients.',
        alignRight: false,
        type: 'block1',
        color:8,
        link:'https://afry.com/en',
        icon:'FaFont'
        
      }];

      function getIcon(node: TimeLineProps):React.ReactElement{
        let Icon;
        switch(node.icon){
            case 'FaVial':
                Icon = FaVial;
                break;
            case 'FaCarSide':
                Icon = FaCarSide;
                break;
            case 'FaGreaterThan':
                Icon = FaGreaterThan;
                break;
            case 'FaTv':
                Icon = FaTv;
                break;
            case 'FaUserGraduate':
                Icon = FaUserGraduate;
                break;
            case 'FaMicrochip':
                Icon = FaMicrochip;
                break;
            case 'FaFont':
                Icon = FaFont;
                break;
            default:
                Icon = FaQuestion
        }
        return (
            <div className={`back-a${node.color} text-black text-center centered rounded-full m-1`} style={{'padding':iconPadding}}>
                {<Icon size={iconSize}/>}
            </div>
        );
      }

      function getText(node: TimeLineProps): React.ReactElement{
        return (
            <div className={`pannelText m-3 ${node.type=='block'?'text-center':''} ${node.alignRight?'text-right':'text-left'}`}>
                <div>
                    <div className={`text-sm text-a${node.color}`}>{node.name}</div>
                    <div className="text-xs text-white">{node.label}</div>
                    <div className="text-xs text-white">{node.duration}</div>
                </div>
            </div>
        );
      }
      
      function getLink(node: TimeLineProps): React.ReactElement{
        return (
            <div className="text-right">
                <Link href={`${node.link}`} target="_blank" className="curson-pointer text-xs font-bold text-blue">Read more here ...</Link>
            </div>
        );
      }
      function getDataNode():React.ReactElement[]{
        const result: React.ReactElement[] = [];
        data.map((node, index) => {
            result.push(
                <div key ={index} className="ml-auto mb-5 mt-5">
                    <div id={`timeline-node-${index}`} className={`cursor-pointer ${node.type=='block'?'mr-auto justify-center':''} flex ${node.alignRight?'flex-row-reverse mr-auto':'felx-row ml-auto'} border-a${node.color} max-w-[280px] min-w-[200px] items-center rounded-xl text-bold`}>
                        {getIcon(node)}
                        {getText(node)}
                        <Tooltip id={`timeline-tooltip-${index}`} className="max-w-[300px]" anchorSelect={`#timeline-node-${index}`} openOnClick={true} variant="light" clickable={true}>
                            <div className="font-bold mb-2">{node.name}</div>
                            <div className="text-xs mb-2">{node.description}</div>
                            {getLink(node)}
                        </Tooltip>
                        {node.type=='block'?getIcon(node):''}
                    </div>
                </div>
            );
        })
        return result.reverse();
      }

    return(
        <div>
            <div className="text-center mb-2">My Professional Timelinne</div>
            <div className="text-xs text-center pl-8 pr-8">Explore a comprehensive account of my professional voyage, featuring diverse experiences garnered from various organizations intertwined with my educational pursuits.</div>
            <div className="timeLine">
              {getDataNode()}
            </div>
        </div>
    );
}