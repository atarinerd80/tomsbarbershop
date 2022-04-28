import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <>
            <footer className='footer'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='copyright'>
                                <p>&copy; 2022 Tom's Barber Shop &amp; Salon. All rights reserved.</p>
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