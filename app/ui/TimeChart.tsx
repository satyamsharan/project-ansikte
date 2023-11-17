import Highcharts, { Options } from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
    weight: '500',
    subsets: ['latin'],
})
const fontStyle = redHatDisplay.style;

export default function TimeChart(){
    const data:{name:string, y:number}[] = [
    {
        name: 'Brainstorming new ideas',
        y: 23
    }, {
        name: 'Developing',
        y: 22
    },{
        name: 'Learning',
        y: 20
    },  {
        name: 'Collaborating with team',
        y: 13
    }, {
        name: 'Connecting with people',
        y: 10
    }, {
        name: 'Creative outlet',
        y: 7
    }, {
        name: 'Miscellaneous tasks',
        y: 5
    }];

    const timeChartOptions: Options = {
        chart: {
            backgroundColor:'none',
            plotBorderWidth: 0,
            plotShadow: false,
            style:{
                fontFamily: fontStyle.fontFamily
            }
        },
        plotOptions: {
            pie: {
                borderWidth:0,
                allowPointSelect: true,
                dataLabels: {
                    enabled: true,
                    distance: -25,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textOutline:'None'
                    },
                    format:'{point.percentage:.0f} %'
                },
                showInLegend: true
            }
        },
        legend:{
            width: 350,
            itemWidth: 175,
            padding:2,
            margin:2,
            itemStyle:{
                color:'white',
                fontSize:'.7em'
            },
            itemHoverStyle:{
                color:'grey'
            }
        },
        accessibility:{
            enabled:false
        },
        colors: ['#EB445A', '#317CF6', '#77D573', '#F19A38', '#575ACE', '#77C6F6', '#F7CC46', '#EB4C3D'],
        series: [{
            type:"pie",
            innerSize: '50%',
            enableMouseTracking: false,
            data: data
        }],
        title: {
            text: 'A Typical Work Day',
            style:{
                color:'#FFFFFF',
                fontSize:'16px'
            }
        },
        subtitle:{
            text:'Discover the diverse tasks that shape my workday.',
            align:'center',
            style:{
                color:'#FFFFFF',
                fontSize:'12px',
                padding:'none'
            }
        },
        credits: {
            enabled: false
        },
      }


    return(
        <div className='min-h-[400px]'>
            <HighchartsReact 
                highcharts={Highcharts}
                options={timeChartOptions}
            />
        </div>
    );
}