import React from 'react'

const Footer = () => {
  return <footer style={{    
    marginTop: '40px',
    background: 'var(--card-background-color)',
    boxShadow: 'var(--card-box-shadow)'
    }}>
    <div className="container" style={{padding: 'var(--spacing)', display: 'flex' , justifyContent: 'center'}}>
      <a href="/terms"><small>terms & conditions</small></a>
    </div>
  </footer>
}

export default Footer