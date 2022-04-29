import React from 'react';

export class About extends React.Component {
    render() {
        const bookingLink = 'https://squareup.com/appointments/book/9hnineu11w65qq/LQ3EXB6ZWBERF/services';
        const aboutImg = 'https://imageprocessor.digital.vistaprint.com/crop/0,0,4705x3333/maxWidth/1000/https://stockservice.digital.vistaprint.com/02dff8f4da794e95933845b4bc78bbe7.jpg';
        return (
            <>
            <section className="case-study">
            <div className="case-study-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title text-center">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="content">
                                <h4 className="inner-title center">Somerset"s Finest Barber Shop &amp; Salon</h4>
                                <p className="case-description center">
                                Established in 2021, Tom"s Barber Shop &amp; Salon focuses on quality service for every individual. Our goal is to cater every service to your needs, and ensure that you leave satisfied! We offer multiple types of services with various industry professionals, including barbering, cosmetology, facial massages, lash extensions, and much more!
                                </p>
                                <p className="case-description center">
                                    Whether you need to plan in advance, or prefer to come in whenever is most convenient, we offer both appointments and walk-ins! To book an appointment, you can do so by giving us a call, reaching out to us on our Facebook page, or clicking the link below!
                                </p>
                                <a className="btn btn-default btn-main" href={ bookingLink } role="button">Book Now</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-content">
                                <img className="img-responsive" src={ aboutImg } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
        );
    }
}

export default About;