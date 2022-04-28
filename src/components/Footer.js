import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <>
            <footer className='footer'>
            <div className='container'>
                <div className='row'>
                <div className='container'>
                    <div className='footer-top'>
                    <div className='col-md-4'>
                        <div className='footer-about'>
                        <h3 className='footer-title'>About</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas <br />
                            sit aspernatur aut odit aut fugit, sed quia <br />
                            magni dolores eos qui ratione. ed quia <br />
                            magni dolores</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-address'>
                        <h3 className='footer-title'>Address</h3>
                        <p>124 Southport Drive, Somerset, KY 42501</p>
                        <p className='contact-address'>
                            Contact us: <a href='tel:6064254260'>(606) 425-4260</a>
                            Write us: <a href='mailto:tomsbarbershopsomerset@gmail.com'>tomsbarbershopsomerset@gmail.com</a>
                        </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='footer-social-media'>
                        <h3 className='footer-title'>Keep In Touch</h3>
                        <ul className='footer-media-link'>
                            <li><a href='#'><i className='tf-ion-social-facebook' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='tf-ion-social-twitter' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='tf-ion-social-linkedin-outline' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='tf-ion-social-google-outline' aria-hidden='true'></i></a></li>
                            <li><a href='#'><i className='tf-ion-social-instagram-outline' aria-hidden='true'></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className='text-center'>
                    <div className='col-md-12'>
                        <div className='copyright'>
                        <p>&copy; 2022 Tom's Barber Shop &amp; Salon. All rights reserved.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
            </>
        );
    }
}

export default Footer;