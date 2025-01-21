import { Height } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

const CoinTrending = ({coin}) => {
    console.log(coin.item);
    
  return (
   
    <Link to={`/coin/${coin.item.id}`}>
      <div className='trending-box'>
        <img src={coin.item.small} alt="" style={{'height': '20px'}} /> <span>{coin.item.name}</span> <span>{coin.item.symbol}</span>
      </div>
    </Link>
    
  )
}

export default CoinTrending;