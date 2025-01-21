import React from 'react'
import useAxios from '../Hooks/useAxios'
import Coin from './Coin';
import { Typography } from '@mui/material';

const Markets = ({results}) => {
    const {response} = useAxios('coins/markets?vs_currency=usd');
    // console.log(response);
    
  return (
    <div>
        <Typography variant='h5' sx={{textAlign:'center'}}>Markets</Typography>
        <div className="coin-mh">
                <p>Coin</p>
                <p className='p2'>Current Price</p>
                <p className='p3'>Price change in 24hr</p>
                <p className='p4'>Market Cap</p>
            </div>
            {/* {!results? results.map(coin => <Coin key={coin.id} coin={coin}/>) :response.map(coin => <Coin key={coin.id} coin={coin}/>) } */}
        {response && response.map(coin => <Coin key={coin.id} coin={coin}/>)}
    </div>
  )
}

export default Markets