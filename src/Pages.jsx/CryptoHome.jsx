import React from 'react'
import Trending from '../Components/Trending'
import Markets from '../Components/Markets'

const CryptoHome = ({results}) => {
  return (
    <div>
    <Trending/>
    <br /> 
    <Markets results={results}/>
    </div>
  )
}

export default CryptoHome