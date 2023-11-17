"use client"
import Highmapss, { Options } from 'highcharts/highmaps';
import HighchartsReact from "highcharts-react-official";
import TileMap from 'highcharts/modules/tilemap';

import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
    weight: '500',
    subsets: ['latin'],
})
const fontStyle = redHatDisplay.style;

export default function Achievement(){
    if (typeof Highmapss === 'object') {
        TileMap(Highmapss);
    }

    const achievementOptions: Options = {
        chart: {
            type: 'tilemap',
            backgroundColor:'none',
            plotBorderWidth: 0,
            height:'122%',
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
        },
        accessibility:{
            enabled:false
        },
        xAxis:{
            visible:false
        },
        yAxis:{
            visible:false
        },
        legend:{
            enabled:false
        },
      
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              color: '#000000',
              format: '{point.x}, {point.y}'
            },
            borderWidth: 1,
            borderColor: '#777'
          }
        },
      
        series: [{
          keys: ['x', 'y'],
          data: [
            {x:1, y:0},
            {x:1, y:1},
            {x:2, y:-1},
            {x:2, y:0},
            {x:2, y:1},
            {x:3, y:0},
            {x:3, y:1}
          ]
        }]
      }

    return(
        <div className='min-h-[400px]'>
            <HighchartsReact 
                highcharts={Highmapss}
                constructorType = {'mapChart'}
                options={achievementOptions}
            />
        </div>
    );
}