import Highcharts, { Options } from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
    weight: '500',
    subsets: ['latin'],
})
const fontStyle = redHatDisplay.style;

export default function Achievement(){
    
    const achievementOptions: Options = {
        chart: {
            backgroundColor:'none',
            plotBorderWidth: 0,
            plotShadow: false,
            style:{
                fontFamily: fontStyle.fontFamily
            }
        },
        title: {
            text: 'My Accomplishments',
            style:{
                color:'#FFFFFF',
                fontSize:'16px'
            }
        },
        subtitle:{
            text:'Explore a compilation of my noteworthy achievements, showcasing milestones and successes attained throughout my journey.',
            align:'center',
            style:{
                color:'#FFFFFF',
                fontSize:'12px',
                padding:'none'
            }
        },
        credits:{
            enabled:false
        }
    }

    return(
        <div className='min-h-[400px]'>
            <HighchartsReact 
                highcharts={Highcharts}
                options={achievementOptions}
            />
        </div>
    );
}