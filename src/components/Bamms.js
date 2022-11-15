import React from 'react'
import {observer} from 'mobx-react'

const bammList = [
  {
    name: 'Liquity',
    description: '',
    url: '/liquity-app-v2/',
    logo: "/images/liquity.svg"
  },
  {
    name: 'Vesta',
    description: '',
    url: '/vesta-app/',
    logo: "/images/vesta.svg"
  },
  {
    name: 'Chicken Bonds',
    description: '',
    url: 'https://www.chickenbonds.org/lusd-bonds#front-ends',
    logo: "/images/cb-logo.svg",
    externalLink: true,
  },  
  {
    name: 'Hundred',
    description: '',
    url: 'https://hundred.finance',
    logo: "/images/hundred-logo.svg",
    externalLink: true,
  },
  {
    text: "Want to backstop your platform?",
    name: 'Get in touch',
    description: 'DMs are open',
    url: 'https://twitter.com/bprotocoleth',
    logo: ""
  },
]

const BammCard = props => {
  const externalLink = props.externalLink
  return <article 
    onClick={() => window.open(props.url, '_blank').focus()}
    className={`bamm-card ${props.comingSoon ? '' : 'clickable blur-onhover'}`}>
    <div style={{opacity: props.comingSoon ? 0.4 : 1, textAlign: 'center'}}>  
      {props.text && <div style={{height: '70px', marginBottom: 'var(--spacing)'}}>{props.text}</div>}
      {props.logo&& <img style={{height: '70px', marginBottom: 'var(--spacing)'}} src={props.logo}/>}
      <h3 style={{marginBottom: 0}}>{props.name}</h3>
      <p style={{margin: 0}}>{props.description}</p>
      {externalLink && <a><small>(External site)</small></a>}
    </div>
  </article>
}

const Bamms = props => {
  return <div>
    <div style={{padding: 'var(--spacing)'}}>
      <b>Select a platform to supply liquidity to its backstop</b>
    </div>
    <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 'var(--spacing)',
        marginBottom: 'calc(var(--spacing) * 2)'
      }}>
        {bammList.map(d => <BammCard key={d} {...d}/>)}
    </div>
    <div style={{padding: 'var(--spacing)'}}>
      <small>For the old (legacy) app <a href="https://legacy.bprotocol.org"> click here </a></small>
    </div>
  </div>
}

export default observer(Bamms)