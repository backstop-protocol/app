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
    text: "Want to backstop your platform?",
    name: 'Get in touch',
    description: 'DMs are open',
    url: 'https://app.bprotocol.org/app',
    logo: ""
  },
]

const BammCard = props => {
  const externalLink = props.url.indexOf('http') > -1
  return <article 
    onClick={() => window.open(props.url, '_blank').focus()}
    className={`bamm-card ${props.comingSoon ? '' : 'clickable blur-onhover'}`}>
    <div style={{opacity: props.comingSoon ? 0.4 : 1, textAlign: 'center'}}>  
      <div>{props.text}</div>
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
      <small>Select the platform to supply the quality to its backstop</small>
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
      <small>For the legacy app <a href="https://legacy.bprotocol.org"> click here </a></small>
    </div>
  </div>
}

export default observer(Bamms)