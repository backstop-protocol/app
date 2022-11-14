import React from 'react'
import Tvl from './Tvl'
import {observer} from 'mobx-react'
import mainStore from '../stores/main.store'

const Hero = () => {
  return <div className="grid">
    <article article aria-busy={`${mainStore.tvlLoading}`}>
      <Tvl/>
    </article>
  </div>
}

export default observer(Hero)