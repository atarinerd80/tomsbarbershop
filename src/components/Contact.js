import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <>
            <section className='contact-call-to-action'>
                <div className='shadow-block vh-center'>
                    <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                        <div className='block'>
                            <h2>Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero fugiat cum ad officia, harum, et
                            voluptas quia vel voluptatem aliquam, facilis corporis nam tempore ullam doloribus iusto sequi ipsum.
                            Fugiat non culpa ad beatae sed dolorem doloribus accusamus</p>
                            <a className='btn btn-default btn-main' href='#' role='button'>Contact Us</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Google Map Here */}
            </section>
            </>
        );
    }
}

export default Contact;