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
  return <div>
    <div style={{width: '100%', textAlign: 'center'}}>

        <div className="grid">
          <div style={{minWidth: '150px', minHeight: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
          <h3 style={{margin: 0, }}>TVL</h3>
          <h3 style={{margin: 0}}><WF num={TVL}/></h3>
        </div>
        {Object.entries(data.currentChainTvls).map(([key, value])=> {
          return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '130px', minHeight: '60px'}}>
            <h6 style={{margin: 0, }}>{key}</h6> <div><WF num={value}/></div>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default observer(Tvl)