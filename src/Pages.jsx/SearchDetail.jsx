import React from 'react'
import HistoryChart from '../Components/HistoryChart'
import CoinDetail from '../Components/CoinDetail'

const SearchDetail = ({results}) => {
    results=null
  return (
    <div><HistoryChart />
      <CoinDetail /></div>
  )
}

export default SearchDetail