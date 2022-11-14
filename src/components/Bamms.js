import React from 'react'
import {observer} from 'mobx-react'

const bammList = [
  {
    name: 'Liquity',
    description: '',
    url: 'https://app.bprotocol.org/liquity-app-v2/',
    logo: "/images/liquity.svg"
  },
  {
    name: 'Vesta',
    description: '',
    url: 'https://app.bprotocol.org/vesta-app/',
    logo: "/images/vesta.svg"
  },
  {
    name: 'Chicken Bonds',
    description: '',
    url: 'https://www.chickenbonds.org',
    logo: "/images/cb-logo.svg"
  },  
  {
    name: 'Hundred',
    description: '',
    url: 'https://hundred.finance',
    logo: "/images/hundred-logo.svg"
  },
  {
    name: 'Legacy App',
    description: '',
    url: 'https://app.bprotocol.org/app',
    logo: "/images/b-icon.svg"
  },
]

const BammCard = props => {
  return <article 
    onClick={() => window.open(props.url, '_blank').focus()}
    className={`bamm-card ${props.comingSoon ? '' : 'clickable blur-onhover'}`}>
    <div style={{opacity: props.comingSoon ? 0.4 : 1, textAlign: 'center'}}>  
      <img style={{height: '70px', marginBottom: 'var(--spacing)'}} src={props.logo}/>    
      <h3 style={{marginBottom: 0}}>{props.name}</h3>
      <p style={{margin: 'var(--spacing) 0'}}>{props.description}</p>
    </div>
  {props.comingSoon && <kbd style={{marginTop: '-80px'}}>coming soon</kbd>}
  </article>
}

const Bamms = props => {
  return <div>
    <div style={{padding: 'var(--spacing)'}}>
      <small>B.Protocol Automatic Market Makers</small>
    </div>
    <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 'var(--spacing)',
        marginBottom: 'calc(var(--spacing) * 2)'
      }}>
        {bammList.map(d => <BammCard key={d} {...d}/>)}
    </div>
  </div>
}

export default observer(Bamms)