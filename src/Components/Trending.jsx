import React from 'react'
import useAxios from '../Hooks/useAxios'
import CoinTrending from './CoinTrending';
import { Typography, Box } from '@mui/material';

const Trending = () => {
    const {response} = useAxios('search/trending');
    console.log(response);
    
  return (
    <Box sx={{margin: '20px'}}>
        <Typography variant='h6' >Top Trending Cryptocurrencies Today</Typography>
    {response && response.coins.map(coin => <CoinTrending  key={coin.item.coin_id} coin={coin} />)}
    </Box>
  )
}

export default Trending