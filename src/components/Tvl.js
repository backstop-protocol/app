import React from 'react'
import {observer} from 'mobx-react'
import mainStore from '../stores/main.store'
import WF from './WhaleFriendly'

const Tvl = props => {
  if(mainStore.tvlLoading){
    return null
  }
  const data = mainStore.tvlData
  const TVL = Object.values(data.currentChainTvls).reduce((acc, item) => acc + item, 0)
  let dataSet = {}
  Object.entries(data.chainTvls).forEach(([chain, {tvl}])=> {
    tvl.forEach(({date, totalLiquidityUSD})=> {
      if(!dataSet[date.toString()]){
        dataSet[date.toString()] = { date }
      }
      dataSet[date.toString()][chain] = totalLiquidityUSD
    })
  })
  return <div style={{
    display: 'flex', gap: 'calc(var(--spacing) * 2)'
  }}>
    <div style={{width: '25%', maxWidth: '200px'}}>
      <small>Total Value Locked</small>
      <h3><WF num={TVL}/></h3>
    </div>
    <div style={{}}>
      <small>Chain Breakdown</small>
      <div style={{display: 'flex', justifyContent: 'space-between', gap: 'calc(var(--spacing) * 2)'}}>
        {Object.entries(data.currentChainTvls).map(([key, value])=> {
          return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <h4 style={{margin: 0}}>{key}</h4> <div><WF num={value}/></div>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default observer(Tvl)