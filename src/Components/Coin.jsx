import { currencyFormat } from "../utils";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from "react-router-dom";
//------------------------------------------------
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Coin = ({coin}) => {
    console.log(coin);
    
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className='coin-box'>
            <img src={coin.image} alt="" style={{'height':'20px'}} />
            <h1>{coin.name} ({coin.symbol})</h1>
            <h1>{currencyFormat(coin.current_price)}</h1>
            {coin.price_change_percentage_24h > 0? <TrendingUpIcon color="success" /> : <TrendingDownIcon color="error" />}
            <p style={{'color': coin.price_change_percentage_24h > 0? 'green' : 'red'}}>
                {coin.price_change_percentage_24h}
            </p>
            <div>
                <p>Market Cap</p>
                <p>{coin.market_cap}</p>
            </div>

        </div>
        <div>

        </div>
    </Link>
  )
}

export default Coin