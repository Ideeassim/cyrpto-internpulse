import { currencyFormat } from "../utils";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from "react-router-dom";


const Coin = ({coin}) => {
    console.log(coin);
    
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className=' coin-heading' >
            <div className="coin-trl sgl-bxs"><img src={coin.image} alt="" style={{'height':'20px'}} />
            <h1>{coin.name} ({coin.symbol})</h1></div> 
           <div className="sgl-bxs"><h1>{currencyFormat(coin.current_price)}</h1></div> 
            <div className="sgl-bxs">
                {coin.price_change_percentage_24h > 0? <TrendingUpIcon color="success" /> : <TrendingDownIcon color="error" />}
            
                <p style={{'color': coin.price_change_percentage_24h > 0? 'green' : 'red'}}>
                {coin.price_change_percentage_24h}</p>
            </div>
            <div className="sgl-bxs">
                {/* <p>Market Cap</p> */}
                <p>{coin.market_cap}</p>
            </div>
            <hr />
        </div>
        <div>

        </div>
    </Link>
  )
}

export default Coin