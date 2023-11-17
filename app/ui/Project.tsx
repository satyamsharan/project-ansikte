import Image from "next/image";
import {AnimatePresence} from "framer-motion"
import Modal from "./Modal";
import React, { useState } from "react";

interface Project{
    name:string;
    duration:string;
    description:string;
    excerpt?:string;
    link?:string;
    bullets?:string[];
    image?:string;
    color:string;
}

export default function Project(){

    const [showModal, setShowModel] = useState(false);
    const [modalTitle, setModelTitle] = useState('');
    const [modalChildren, setModelChildren] = useState([<></>]);
    const [modalLink, setModelLink] = useState<string>();

    function modelOpen(projectName:string, children:React.ReactElement[], projectLink?:string){
        setModelTitle(projectName);
        setModelChildren(children);
        setModelLink(projectLink)
        setShowModel(true);
    }

    const projectList:Project[] = [
        {
            name:'Vidyaprasar: The Learning Management System',
            duration:'May 2010 - Jun 2012',
            description:'Vidyaprasar is the learning management system used specifically for distance education. It has feature like video on demand, course notes, planner etc. The system is developed in-house and I worked on all phases of development from requirement analysis to deployment and support.',
            excerpt:'Vidyaprasar was the first large project I picked. It was an in-house learning management system used specifically for distance education.',
            link:'https://vidyaprasar.dei.ac.in/',
            bullets:['Type: Project', 'Client: Dayalbagh Educational Institute', 'Technologies: Java, Google Web Toolkit, MySQL, RHEL'],
            image:'1.jpg',
            color:"1"
        },{
            name:'E Procurement System',
            duration:'Jul 2012 - May 2014',
            description:'E Procurement System is a platform for online procurement of Materials and services. It contains modules like E-Tendering, Auction, Reverse Auction, Global Tenders, User Management etc. Salient security features deployed include PKCS, asymmetric and symmetric encryption, PKI ennoblement, digital signature, SSL etc. apart from other security features like user name, password, digital authentication, role-based action/access privileges, audit trail, time synchronization etc.',
            excerpt:'E Procurement System is for online procurement of Materials and services. It contains modules like E-Tendering, Auction, Reverse Auction.',
            link:'https://www.ecil.co.in/',
            bullets:['Type: Project', 'Client: Electronics Corporation India Ltd', 'Technologies: Java, Struts, MySQL, Public Key Infrastructure (PKI) security, Smart-Card Integration'],
            image:'2.jpg',
            color:"3"
        },{
            name:'Supplier Relationship Management System (SRMS)',
            duration:'May 2014 - Dec 2014',
            description:'Supplier Relationship Management System (SRMS) is the system for strategically planning and managing, all interactions with third-party organizations that supply goods and/or services to an organization in order to maximize the value of those interactions. Project scope is the custom development of J2EE based SRMS for the client DP World, Dubai which operates more than 65 marine terminals across six continents. The Project requires integration with its existing Finance System (Oracle Financial Suite), Procurement & Material Management systems (Maximo & Buy World), and other internal systems.',
            excerpt:'Supplier Relationship Management System (SRMS) is the system for strategically managing, all interactions with third-party organizations.',
            link:'https://www.dpworld.com/',
            bullets:['Type: Custom Project - Web Application','Client: Dubai Port World, Dubai', 'Technologies: Java Enterprise, Spring, Hibernate, JQuery UI, MySQL, REST Services'],
            image:'3.jpg',
            color:"4"
        },{
            name:'AIP Design Studio',
            duration:'Jan 2015 - Jul 2016',
            description:'Accenture Insights Platform hosts an advanced analytics applications portfolio, an integrated design, build, run environment enabling the agile development of industry and function-specific analytics solutions. The applications are flexible, easily tailored and agile, providing organizations with immediate access to the tools needed to make data-driven decisions and solve complex business issues.',
            excerpt:'AIP hosts an advanced analytics applications portfolio to manage the agile development and management of analytics solutions.',
            link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
            bullets:['Type: Product Development', 'Client: Multiple clients all over the globe', 'Technologies: Java Enterprise, Builder Pattern, Clean Architecture, JUnit, Hibernate, BackboneJS, MongoDB, Azure, Azure SQL, Docker, Kubernetes', 'Cloud Stack: AWS EC2 (Virtual Servers), AWS RDS (Relational Database), AWS DynamoDB(NoSQL DB), AWS S3 (File Storage)'],
            image:'4.jpg',
            color:"6"
        },{
            name:'Marketing Mix Modelling',
            duration:'Jul 2016 - Dec 2016',
            description:'Telstra, Australia\'s largest telecommunications company, has multiple campaigns in-market and across both traditional & digital media at any one time. To better understand its customers and maximize return on marketing investment, Telstra wanted to implement a data-driven approach to provide deeper insights, faster. We developed a Marketing Mix Modeler which Simulates the return on investment with marketing spend across various channels and campaigns. It also optimized the split of the budget for target-based or budget-based targets.',
            excerpt:'Telstra data-driven approach to provide deeper insights, faster. We developed a Marketing Mix Modeler.',
            link:'https://www.accenture.com/au-en/case-studies/applied-intelligence/telstra',
            bullets:['Type: Custom Analytics Application (Marketing Mix Modelling)', 'Client: Telstra, Melbourne, Australia', 'Technologies: Java Enterprise, Builder Pattern, REST, R, PostgreSQL, AIP-Design Studio Platform, Java, JUnit, HighCharts, D3, Backbone JS, Bootstrap. Maven, Git, IntelliJ', 'Cloud Stack: AWS EC2 (Virtual Servers), AWS RDS (Relational Database), AWS DynamoDB(NoSQL DB), AWS S3 (File Storage)'],
            image:'5.jpg',
            color:"1"
        },{
            name:'Retail Price Optimization',
            duration:'Jan 2017 - Apr 2017',
            description:'Loblaw Companies Limited is the largest Canadian food retailer, encompassing corporate and franchise supermarkets operating under 22 regional and market segment banners, as well as pharmacies, banking, and apparel. Loblaw required a Retail Price Optimization application which can utilize the state-of-the-art math analysis to predict how the demand will change in response to different prices via various channels. Price optimization helps the business to craft prices that would meet customers\' readiness to pay and maximize profits.',
            excerpt:'A Retail Price Optimization application to predict how the demand will change for Loblaw, the largest Canadian food retailer.',
            link:'https://www.loblaw.ca/',
            bullets:['Type: Custom Analytics Application (Retail Optimization)', 'Client: Loblaw, Brampton, Canada', 'Technologies: Java Enterprise, Builder Pattern, REST, R, Morphia, MongoDB, AIP-Design Studio Platform, HighCharts, D3, Backbone JS, Bootstrap. Maven, Git, IntelliJ', 'Cloud Stack: AWS EC2 (Virtual Servers), AWS RDS (Relational Database), AWS DynamoDB(NoSQL DB), AWS S3 (File Storage)'],
            image:'6.jpg',
            color:"3"
        },{
            name:'Energy Demand Forecast - Gaz Metro',
            duration:'Apr 2017 - Aug 2017',
            description:'Énergir, formerly known as Gaz Métro, is a diversified energy company with 520,000 customers. It is the largest natural gas distribution company in Quebec, and also produces, through its subsidiaries, electricity from wind power. It is very complicated and costly to store energy hence forecasting energy use becomes a boon to the energy distribution companies. The Gaz Metro Energy Demand Forecaster used both top-down and bottom-up approach to create a daily, weekly, and monthly energy demand forecast considering various predictors which affected the demand.',
            excerpt:'Energy Demand Forecaster uses both top-down and bottom-up approach to create a daily, weekly, and monthly energy demand forecast.',
            link:'https://energir.com/en',
            bullets:['Type: Custom Analytics Application (Forecaster)', 'Client: Énergir, Quebec, Canada', 'Technologies: Java Enterprise, Builder Pattern, REST, R, Morphia, MongoDB, AIP-Design Studio Platform, HighCharts, D3, Backbone JS, Bootstrap. Maven, Git, IntelliJ', 'Cloud Stack: AWS EC2 (Virtual Servers), AWS RDS (Relational Database), AWS DynamoDB(NoSQL DB), AWS S3 (File Storage)'],
            image:'7.jpg',
            color:"4"
        },{
            name:'Model Management',
            duration:'Oct 2017 - Mar 2020',
            description:'Many corporates have now realized the need for a centralized repository of storing models along with detailed metadata for efficient work-group collaboration and version control of various models. Model management involves a collaborative team of data scientists, model reviewers, model engineers, model operation engineers with the process of signing off on the development, validation, deployment, and retirement life cycle management milestones.',
            excerpt:'A centralized repository of storing models along with detailed metadata for efficient work-group collaboration and version control of various models.',
            link:'https://www.accenture.com/us-en/services/applied-intelligence/aip-plus-index',
            bullets:['Type: Product Development', 'Client: Multiple clients - Intesa Bank Milan Italy,  Tetra Pak Lund Sweden and a few more', 'Technologies: Java Enterprise, Builder Pattern, Clean Architecture, JUnit, BackboneJS, ReactJS, Cytoscape, AngularJS, REST, OpenAPI (Swagger), Spark, Python, R, RabbitMQ, MongoDB, HighCharts, D3, Backbone JS, Bootstrap. Maven, Git, Docker, Kubernetes, IntelliJ', 'Cloud Stack: AWS EC2 (Virtual Servers), AWS RDS (Relational Database), AWS DynamoDB(NoSQL DB), AWS S3 (File Storage)'],
            image:'8.jpg',
            color:"6"
        },{
            name:'Vanadis® NIPT System',
            duration:'Jul 2020 - Apr 2022',
            description:'Vanadis® NIPT is a state of art cell-free DNA (cfDNA) testing system that uses non-invasive prenatal testing to predetermine and forecast genetic diseases in the fetus in very early stages. I worked on a highly complex Java-based control system which connects and controls various devices like the Extract, the Analysis unit (core), the View system with end-user systems like LifeCycle®',
            excerpt:'A highly complex Java-based control system which connects and controls various devices for non-invasive prenatal testing system.',
            link:'https://rh.perkinelmer.com/products/vanadis-nipt-system/',
            bullets:['Type: Product Development', 'Technologies: Java Enterprise, Spring Boot, REST, OpenAPI (Swagger), PostgreSQL, Maven, Git, IntelliJ, Jenkins', 'Cloud Stack: AWS EC2 (Virtual Servers)'],
            image:'9.jpg',
            color:"1"
        },{
            name:'Compliance Navigator',
            duration:'May 2022 - Oct 2022',
            description:'Compliance navigator is a tool being developed by a leading automotive group in Sweden. It streamlines all compliance-related activities pertaining to various products across different geographies. I worked with the agency team from AFRY as a technical architect and development lead. Analyzed the feasibility in tandem with existing systems. Worked on data availability and integration, rapid  prototyping.',
            excerpt:'Compliance Navigator to streamlining all compliance-related activities pertaining to various products across different geographies.',
            link:'https://www.volvocars.com/se/',
            bullets:['Type:  Product Architecture & Design', 'Technologies Used: Figma, PrimeReact, React, Next.js, HTML, JavaScript, Vira (Volvo\'s Jira), CarWeaver'],
            image:'10.jpg',
            color:"3"
        },{
            name:'Flowity',
            duration:'Sep 2022 - Jan 2023',
            description:'Flowity provides business intelligence value by unitizing the power of artificial intelligence. It uses a camera-based sensor and can provide metrics that could previously only be obtained in a non-automated fashion. I worked as a senior full-stack developer to incorporate key features.',
            excerpt:'Flowity provides business intelligence value by unitizing the power of artificial intelligence and a camera-based sensor.',
            link:'https://www.flowity.com/',
            bullets:['Type:  Product Development', 'Technologies Used: Azure IoT hub, Mender, Terraform, Docker & Kubernetes, Nvidia Jetson, InfluxDB (time-series) Azure AD, Azure Communication Services, React, Spring Boot, Java (OpenJDK) and JavaScript.'],
            image:'11.jpg',
            color:"4"
        },{
            name:'Data and Analytics - Exploration and Up-skilling',
            duration:'Jan 2023 - Apr 2023',
            description:'The assignment was to explore various Data management and analytics tools. Worked with the following tools to create an electricity price forecaster. I explored and evaluated Snowflake with Snowpipe and Snowpark Java and Python API. Also created a proof of concepts utilizing Snowflake capabilities and publicly available energy data.',
            excerpt:'Evaluated Snowflake with Snowpark Java API to create a proof of concepts utilizing Snowflake capabilities and publicly available energy data.',
            link:'https://www.snowflake.com/en/',
            bullets:['Type:  Exploration', 'Technologies Used: Snowflake, Terraform, Snowflake Java API, Snowflake Python API, SnowSQL, Azure Synapse Analytics.'],
            image:'12.jpg',
            color:"6"
        },{
            name:'Air Quality Monitoring System',
            duration:'Oct 2023 - Present',
            description:'Trafikverket wants a simple, cost-effective solution to monitor real-time data that is being measured by multiple sensors across different locations. I joined the project in the early phase where a hardware proof of concept was ready. My responsibility was to make a scalable, low-cost & industry-grade application that could address operational challenges such as sensor communication failure due to power or network outages, among others.',
            excerpt:'Trafikverket wants a simple, cost-effective solution to monitor real-time data that is being measured by multiple sensors across different locations.',
            link:'',
            bullets:['Type: Project', 'Technologies: InfluxDB, React, Next.js, Node.js, Java Enterprise, Microservices, JavaScript, CSS, HTML', 'Cloud Stack: InfluxDB, Azure App Service'],
            image:'13.jpg',
            color:"1"
        }
    ];

    function getProjectPanel(project: Project, i:number): React.ReactElement{
        const childrenElementList: React.ReactElement[] = [];
        childrenElementList.push(<div className="text-xs mb-2">({project.duration})</div>);
        childrenElementList.push(<div className="text-xs mb-2">{project.description}</div>);
        if(project.bullets){
            project.bullets.map((bullet, index) => {
                let splicedText = bullet.split(':');
                let title=null;
                let text=bullet;
                if(splicedText.length==2){
                    title = splicedText[0]
                    text = splicedText[1]
                }
                childrenElementList.push(
                    <div key={`bullet-${i}-${index}`} >
                        <div className={`text-a${project.color}`}>
                            {title?('■ '+title+': '):''}
                        </div>
                        <div className="text-left pb-2">
                            {text}
                        </div>
                    </div>
                );
            });
        }

        return (
            <>
                <div id={`project-node-${i}`} className={`cursor-pointer m-1 p-1 mb-10 border-bottom ${project.color}`} onClick={()=>modelOpen(project.name, childrenElementList, project.link)}>
                    <Image className="m-auto" src={`/project/${project.image?project.image:'no.jpg'}`} alt="" width={300} height={150}/>
                    <div className={`border-three border-t-none pl-2 pr-2 pt-1 pb-1 text-center  w-[300px]`}>
                        <div>
                            <div className="min-h-[56px] flex flex-col justify-around">
                                <div className={`text-sm text-a${project.color}`}>{project.name}</div>
                                <div className="text-xs text-white">({project.duration})</div>
                            </div>
                            <div className="text-xs text-white text-justify mt-2">{project.excerpt?project.excerpt:project.description}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }



    function getAllProjects(){
        const result: React.ReactElement[] = [];
        projectList.reverse().map((project, index) => {
            result.push(
                <div key={`project-${index}`}>
                    {getProjectPanel(project, index)}
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
            <div className="text-center mb-2">My Projects</div>
            <div className="text-xs text-center pl-2 pr-2 lg:pl-8 lg:pr-8">Discover a curated collection of my diverse projects, offering insights into my creative endeavors, problem-solving skills, and passion for innovation.</div>
            <div className="pt-2 pb-2">
              {getAllProjects()}
            </div>

            <AnimatePresence initial={false}>
                {showModal && <Modal handleClose={()=>setShowModel(false)}  title={modalTitle} link={modalLink}>{modalChildren}</Modal>}
            </AnimatePresence>  
        </div>
    );
}