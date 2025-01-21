import React from 'react'
import useAxios from '../Hooks/useAxios'
import Coin from './Coin';

const Markets = () => {
    const {response} = useAxios('coins/markets?vs_currency=usd');
    console.log(response);
    
  return (
    <div>
        <h1>Markets</h1>
        {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
    </div>
  )
}

export default Markets