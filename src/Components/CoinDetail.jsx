import React from 'react'
import useAxios from '../Hooks/useAxios'
import { useParams } from 'react-router-dom'

const CoinDetail = () => {
    const {id}= useParams();
    const {response}= useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false`)
    console.log(response);
    if (!response) {
        return <div>Loading...</div>
    }
    return (
    <div>
        <img src={response.image.small} alt="" />
        <h1>{response.name}</h1>
        <p  className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html:response.description.en}}></p>
    </div>
  )
}

export default CoinDetail