import React from 'react';
import GoogleMapComponent from '../components/GoogleMapComponent';

export class Contact extends React.Component {
    render() {
        return (
            <>
            <section className="contact-call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <GoogleMapComponent />
                        </div>
                    </div>
                    <div className="row contact-info">
                        <div className="col-md-6 bottom-padding">
                            <h3>Shop Hours</h3>
                            <span>Monday - Friday: 9AM - 6PM</span><br />
                            <span>Saturday: 9AM - 1PM</span><br />
                            <span>Sunday: Closed</span>
                        </div>
                        <div className="col-md-6 bottom-padding">
                            <h3>Address</h3>
                            <span>124 Southport Drive</span><br />
                            <span>Somerset, KY 42501</span><br />
                            <span>(606) 425-4260</span>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Contact;