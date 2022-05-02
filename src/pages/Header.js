import React from 'react';

export class Header extends React.Component {
  render() {
    const bookingLink = 'https://squareup.com/appointments/book/9hnineu11w65qq/LQ3EXB6ZWBERF/services';
    return (
      <>
        <header className="hero-area th-fullpage">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img className="logo-image" src='/img/logo.png'/>
              </div>
            </div>
            <div classname="row">
              <div className="col-sm-12 col-md-6 offset-md-3">
                <a className="btn btn-default btn-main booking-button" href={ bookingLink } role="button">Book An Appointment</a>
              </div>
            </div>
          </div>
        </header> 
      </>
    );
  }
}

export default Header;