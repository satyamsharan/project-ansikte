import Highcharts, { Options } from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import WordCloud from 'highcharts/modules/wordcloud';
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
    weight: '500',
    subsets: ['latin'],
})
const fontStyle = redHatDisplay.style;

export default function SkillWordCloud(){
    if (typeof Highcharts === 'object') {
        WordCloud(Highcharts);
    }
    
    const data:{name:string, weight:number}[] = [
        {weight:10, name:'Software Development'},
        {weight:10, name:'Algorithms'},
        {weight:7, name:'Data Analytics'},
        {weight:7, name:'Software Architecture'},
        {weight:7, name:'Cloud Architecture'},
        {weight:5, name:'Machine Learning'},
        {weight:7, name:'AI'},
        {weight:6, name:'Full Stack Development'},
        {weight:5, name:'Data Pipelines'},
        {weight:7, name:'Agile Development'},
        {weight:5, name:'MacOS'},
        {weight:4, name:'Windows Sever'},
        {weight:7, name:'Linux/Unix'},
        {weight:4, name:'PKI'},
        {weight:2, name:'JUnit'},
        {weight:3, name:'Invision'},
        {weight:3, name:'Figma'},
        {weight:3, name:'Azure IoT Hub'},
        {weight:3, name:'Kubernetes'},
        {weight:3, name:'Docker'},
        {weight:3, name:'Mender'},
        {weight:5, name:'Terraform'},
        {weight:2, name:'GraphQL'},
        {weight:6, name:'Open API (Swagger)'},
        {weight:7, name:'REST'},
        {weight:7, name:'Microservices'},
        {weight:6, name:'D3'},
        {weight:6, name:'HighCharts'},
        {weight:6, name:'Require JS'},
        {weight:6, name:'Backbone.js'},
        {weight:6, name:'Express.js'},
        {weight:7, name:'Next.js'},
        {weight:5, name:'JBoss'},
        {weight:6, name:'Bootstrap'},
        {weight:6, name:'Tailwind'},
        {weight:8, name:'React'},
        {weight:5, name:'Angular'},
        {weight:6, name:'jQuery'},
        {weight:7, name:'Spring Boot'},
        {weight:5, name:'Spring Framework'},
        {weight:5, name:'Spring Security'},
        {weight:5, name:'Hibernate'},
        {weight:7, name:'Node JS'},
        {weight:6, name:'Kanban'},
        {weight:7, name:'Scrum'},
        {weight:4, name:'Confluence'},
        {weight:7, name:'Atlassian Jira'},
        {weight:6, name:'Jenkins'},
        {weight:6, name:'Github Actions'},
        {weight:6, name:'BitBucket'},
        {weight:6, name:'GitLab'},
        {weight:6, name:'GitHub'},
        {weight:6, name:'Git'},
        {weight:6, name:'Apache Maven'},
        {weight:4, name:'VS Code'},
        {weight:4, name:'IntelliJ IDEA'},
        {weight:3, name:'Arduno'},
        {weight:5, name:'Raspberry Pi'},
        {weight:7, name:'Digital Ocean'},
        {weight:7, name:'Amazon Web Services'},
        {weight:5, name:'Google Cloud Platform (GCP)'},
        {weight:7, name:'Microsoft Azure Cloud'},
        {weight:7, name:'Influx DB'},
        {weight:5, name:'R'},
        {weight:1, name:'Visual Basics'},
        {weight:4, name:'JSP'},
        {weight:10, name:'HTML'},
        {weight:9, name:'CSS'},
        {weight:7, name:'TypeScript'},
        {weight:5, name:'Matlab'},
        {weight:3, name:'C++'},
        {weight:4, name:'C'},
        {weight:2, name:'PHP'},
        {weight:9, name:'Python'},
        {weight:10, name:'Java'},
        {weight:10, name:'JavaScript'},
        {weight:10, name:'SQL'},
        {weight:7, name:'Snowflake'},
        {weight:7, name:'SnowSQL'},
        {weight:2, name:'Amazon DynamoDB'},
        {weight:4, name:'MariaDB'},
        {weight:5, name:'MongoDB'},
        {weight:4, name:'Microsoft SQL Server'},
        {weight:5, name:'Oracle'},
        {weight:5, name:'MySQL'},
        {weight:5, name:'Postgres'},
        {weight:2, name:'Gremlin'},
        {weight:2, name:'Neo4j'},
    ];

    const skillWordCloudOptions: Options = {
        chart: {
            backgroundColor:'none',
            height:500,
            style:{
                fontFamily: fontStyle.fontFamily
            }
        },
        accessibility:{
            enabled:false
        },
        colors: ['#EB445A', '#317CF6', '#77D573', '#F19A38', '#575ACE', '#77C6F6', '#F7CC46', '#EB4C3D'],
        series: [{
            type: 'wordcloud',
            spiral: 'archimedean',
            data:data
        }],
        title: {
            text: 'Proficiency Palette',
            style:{
                color:'#FFFFFF',
                fontSize:'16px'
            }
        },
        subtitle:{
            text:'Checkout my tech toolbox at a glance. This word cloud highlights the skills I have picked up over the years.',
            align:'center',
            style:{
                color:'#FFFFFF',
                fontSize:'12px',
                padding:'none'
            }
        },
        tooltip: {
            formatter:function(){
                return `<p class="text-bold" style="color:${this.color}">${this.key}</p>`
            }
            
        },
        credits: {
            enabled: false
        },
      }


    return(
        <div className='min-h-[500px]'>
            <HighchartsReact 
                highcharts={Highcharts}
                options={skillWordCloudOptions}
            />
        </div>
    );

}