import React from 'react';
import './TopHeader.css'

function TopHeader() {
  return (
    <header className="TopHeader">
        <div className="TopHeader-logo">
            <img src="https://www.healthifyme.com/blog/wp-content/uploads/2018/10/footer-logoR.png" alt="logo"/>
        </div>
        <nav className="TopHeader-nav">
            <a href="/" >Accounts</a>
        </nav>
    </header>
  );
}

export default TopHeader;
