import { Tooltip } from "react-tooltip";
import { FaQuestion, FaVial, FaCarSide, FaGreaterThan, FaTv, FaUserGraduate, FaMicrochip, FaFont } from "react-icons/fa";
import Link from "next/link";


interface TimeLineProps{ 
    name?: string; 
    label?: string; 
    duration?: string; 
    description?: string; 
    alignLeft?: boolean; 
    type?: string;
    color: any; 
    link?: string;
    icon?: string;
}

export default function TimeLine(){
    let iconPadding = 12;
    let iconSize = 32;
    const data:TimeLineProps[] = [{
        name: 'HCL, Noida, India',
        label: 'Software Engineer',
        duration: 'Jul 2012 - Jul 2014',
        description: 'Following the completion of my bachelor\'s degree, I secured a campus placement at HCL, a prominent Indian multinational information technology services and consulting company located in Noida, India. During my tenure at the company, I actively engaged in enterprise application development, gaining invaluable hands-on experience in crafting robust solutions for complex business needs. This opportunity not only honed my technical skills but also provided me with insights into the dynamic and innovative landscape of the IT industry.',
        alignLeft: false,
        color:2,
        link:'https://hcl.com/',
        icon:'FaTv'
        
      },{
        name: 'HCL, Noida, India',
        label: 'Senior Software Engineer',
        duration: 'Aug 2014 - Dec 2014',
        description: 'After two years of dedicated service, I was honored to receive a promotion to the position of Senior Software Engineer.',
        alignLeft: true,
        color:2,
        link:'https://hcl.com/',
        icon:'FaTv'
        
      },{
        name: 'Accenture, Gurugram, India',
        label: 'Senior Analyst',
        duration: 'Feb 2015 - Nov 2016',
        description: 'In pursuit of expanding my expertise, I joined Accenture in Gurugram, India, where I immersed myself in the dynamic realms of Data Analytics, Predictive Analysis, Forecasting Techniques, Machine Learning and AI. My role involved applying these advanced methodologies to address the unique challenges of diverse clientele across Australia, Europe, and North America.',
        alignLeft: false,
        color:3,
        link:'https://newsroom.accenture.com/news/2015/accenture-launches-advanced-analytics-applications-platform-to-deliver-actionable-insights-to-decision-makers',
        icon:'FaGreaterThan'
        
      },{
        name: 'Accenture, Gurugram, India',
        label: 'Specialist (Team Lead)',
        duration: 'Dec 2016 - Mar 2018',
        description: 'Soon after, I was entrusted with the responsibility of leading a compact yet highly skilled team comprising of 5-8 experts. Guiding this team allowed me to cultivate collaborative problem-solving approaches, ensuring swift resolution of issues and fostering a cohesive and high-performing unit dedicated to delivering exceptional results.',
        alignLeft: true,
        color:3,
        link:'https://www.accenture.com/au-en/case-studies/applied-intelligence/telstra',
        icon:'FaGreaterThan'
        
      },{
        name: 'Accenture, Bologna, Italy',
        label: 'Specialist (Team Lead)',
        duration: 'Apr 2018 - Nov 2019',
        description: 'In 2018, my outstanding contributions to the field of data analytics opened doors to a remarkable opportunity — I joined a core product development team based in Bologna and Milan, Italy. Collaborating on the creation of a cutting-edge, cloud-enabled data analytics and machine learning platform, our efforts transcended geographical boundaries, impacting over 80 clients worldwide. This experience broadened my technical expertise and also allowed me to play a pivotal role in the global deployment of a transformative solution.',
        alignLeft: false,
        color:4,
        link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
        icon:'FaGreaterThan'
        
      },{
        name: 'Accenture, Bologna, Italy',
        label: 'Associate Manager',
        duration: 'Dec 2019 - Mar 2020',
        description: 'In a span of just 1.5 years since joining the product development team, I achieved a significant milestone — I was promoted to Associate Manager. In this elevated role, I assumed leadership of a dynamic team entrusted with the development of innovative functionalities for the platform. This opportunity not only underscored my rapid professional growth but also allowed me to steer and contribute to the evolution of the product.',
        alignLeft: true,
        color:4,
        link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
        icon:'FaGreaterThan'
        
      },{
        name: 'PerkinElmer, Stockholm, SE',
        label: 'Consultant',
        duration: 'Jul 2020 - Apr 2022',
        description: 'In my capacity as a Senior Consultant at AFRY, I had the privilege of collaborating closely with the R&D team at PerkinElmer. During this engagement, I played a pivotal role in contributing to the development of novel features within their renowned Non-Invasive Prenatal Testing (NIPT) system.',
        alignLeft: false,
        color:6,
        link:'https://www.perkinelmer.com/category/vanadis-cfdna-platform',
        icon:'FaVial'
        
      },{
        name: 'Volvo Cars, Gothenburg, SE',
        label: 'Consultant',
        duration: 'May 2022 - Oct 2022',
        description: 'In my capacity as a Senior Consultant at AFRY, I collaborated closely with the Compliance Team at Volvo Cars, contributing significantly to the development of a cutting-edge Compliance Management System - Compliance Navigator. The experience not only deepened my understanding of regulatory frameworks but also reinforced my dedication to delivering forward-thinking solutions in the automotive industry.',
        alignLeft: true,
        color:6,
        link:'https://www.volvocars.com/se/',
        icon:'FaCarSide'
        
      },{
        name: 'Flowity, Stockholm, SE',
        label: 'Consultant',
        duration: 'Oct 2022 - Feb 2023',
        description: 'I actively participated in AFRY\'s in-house development of Flowity, an innovative AI application harnessing computer vision to deliver crucial insights. Today, Flowity stands as a well-established player in the industry, successfully catering to a diverse clientele. Its evolution from inception to a trusted solution reflects our commitment to delivering innovative, AI-driven insights that have found value across multiple sectors.',
        alignLeft: false,
        color:6,
        link:'https://www.flowity.com/',
        icon:'FaMicrochip'
        
      },{
        name: 'Revvity, Stockholm, SE',
        label: 'Consultant',
        duration: 'May 2023 - Oct 2023',
        description: 'As the Genomics business of PerkinElmer underwent a transition to become the new entity, Revvity, I was entrusted once again as a senior consultant with a pivotal role. This time, my responsibilities extended to guiding Revvity through a comprehensive rebranding process for their multiple application stacks. In this capacity, I ensured a seamless and high-quality transition, contributing to the establishment of Revvity as a distinct and dynamic player in the industry, aligned with its renewed vision and identity.',
        alignLeft: true,
        color:6,
        link:'https://www.revvity.com/',
        icon:'FaVial'
        
      },{
        name: 'Olink, Uppsala, SE',
        label: 'Data Architect',
        duration: 'Jan 2024 - Ongoing',
        description: 'Olink’s product life cycle management includes extensive data management and analysis of large datasets. To accelerate innovation in product development and increase operational excellence, Olink is establishing a modern data analytics environment that strengthens central data governance policies and provides access to novel technologies.',
        alignLeft: false,
        color:6,
        link:'https://olink.com/',
        icon:'FaVial'
        
      },{
        name: 'AFRY, Stockholm, Sweden',
        label: 'Senior Consultant',
        duration: 'Apr 2020 - Ongoing',
        description: 'With an enriching tenure of over 5 years at Accenture, I embarked on a new chapter in my career by joining AFRY in Stockholm, Sweden. AFRY boasts a robust foundation in engineering consulting spanning across diverse industries and has consistently ranked high in the \'Great Place to Work\' index. As I approach my fourth year with AFRY, my commitment remains steadfast in assisting our valued customers. I am dedicated to delivering impactful solutions that empower them to not only achieve but also sustain operational excellence. This ongoing journey at AFRY has been instrumental in honing my skills and deepening my understanding of how strategic consulting can truly make a lasting difference for our clients.',
        alignLeft: true,
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
            <div className={`panelText m-3 ${node.type=='block'?'text-center':''} ${node.alignLeft?'text-right':'text-left'}`}>
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
                <Link href={`${node.link}`} target="_blank" className="cursor-pointer text-xs font-bold text-blue">Read more here ...</Link>
            </div>
        );
      }
      function getDataNode():React.ReactElement[]{
        const result: React.ReactElement[] = [];
        data.map((node, index) => {
            result.push(
                <div key ={index} className="ml-auto mb-5 mt-5">
                    <div id={`timeline-node-${index}`} className={`cursor-pointer ${node.type=='block'?'mr-auto justify-center':''} flex ${node.alignLeft?'flex-row-reverse mr-auto':'flex-row ml-auto'} max-w-[280px] min-w-[200px] items-center rounded-xl border-a${node.color} text-bold`}>
                        {getIcon(node)}
                        {getText(node)}
                        {node.type=='block'?getIcon(node):''}
                    </div>

                    <Tooltip id={`timeline-tooltip-${index}`} className="max-w-[300px]" anchorSelect={`#timeline-node-${index}`} openOnClick={true} variant="light" clickable={true}>
                        <div className="font-bold mb-2">{node.name}</div>
                        <div className="text-xs mb-2">{node.description}</div>
                        {getLink(node)}
                    </Tooltip>
                </div>
            );
        })
        return result.reverse();
      }

    return(
        <div>
            <div className="text-center mb-2">My Professional Timeline</div>
            <div className="text-xs text-center pl-8 pr-8 pb-6">Explore a comprehensive account of my professional voyage, featuring diverse experiences garnered from various organizations that I have been a part of.</div>
            <div className="timeLine max-w-[490px] m-auto">
              {getDataNode()}
            </div>
        </div>
    );
}
