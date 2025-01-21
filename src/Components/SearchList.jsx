import { Link } from "react-router-dom";
import Coin from "./Coin";

const SearchList = ({results}) => {
    
  
  return (
  <div>
    {results? results.map((coin, id) => {
        return <div key={id} results={results}>
        <Link to={`/coin/${coin.id}`} ><div className="bbr"><img src={coin.image} style={{'height':'20px'}} alt="" /> {coin.id} </div></Link></div>
    }) : null}
    </div>
  )
}

export default SearchList