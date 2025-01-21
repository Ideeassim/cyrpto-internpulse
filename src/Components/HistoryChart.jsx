import React from 'react'
import useAxios from '../Hooks/useAxios'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import moment from "moment";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const HistoryChart = () => {
    const {id} = useParams();
    const {response}= useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`)
    console.log(response);
    
    if (!response) {
        return <div>Loading...</div>
    }
    const coinChart=response.prices.map(value => ({x:value[0], y:value[1].toFixed(2)}));
   
    const options={
        responsive: true
    }
    const data ={
        labels: coinChart.map(value => moment(value.x).format('MMM DD')),   //x-axis
        datasets:[
        {
            fill:true,
            label: id,
            data: coinChart.map(val => val.y),  //y-axis
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }
        ]
        
    }
    
  return (
    <div><Line options={options} data={data} /> </div>
  )
}

export default HistoryChart