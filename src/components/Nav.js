import React from 'react'

const Nav = () => {
  return <div>
    <nav className="container">
      <ul style={{flexGrow: '1'}}>
        <img style={{height: '35px'}} src="/images/b-protocol-small-logo.svg"></img>
      </ul>
      <ul>
        <li><a href="https://dashboard.bprotocol.org/">Dashboard</a></li>
        <li><a href="https://docs.bprotocol.org/">Docs</a></li>
        <li><a href="https://github.com/backstop-protocol">Github</a></li>
      </ul>
    </nav>
  </div>
}

export default Nav