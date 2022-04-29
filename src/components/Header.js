import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <>
        <header className="hero-area th-fullpage">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img className="logo-image" src='/img/logo.png'/>
              </div>
            </div>
          </div>
        </header> 
      </>
    );
  }
}

export default Header;