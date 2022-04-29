import React from 'react';
import ServiceList from './ServiceList';

export class Services extends React.Component {
    render() {
        const barberingPriceList = [
            {
                name: 'Men\'s Haircut',
                price: 18
            },
            {
                name: 'Beard Trim (No Razor)',
                price: 10
            },
            {
                name: 'Face Shave / Beard Line Up',
                price: 20
            },
            {
                name: 'Head Shave',
                price: 20
            },
            {
                name: 'COMBO: Haircut & Beard Trim',
                price: 25
            },
            {
                name: 'COMBO: Haircut & Shave',
                price: 30
            },
            {
                name: 'COMBO: Head & Face Shave',
                price: 30
            },
            {
                name: 'Wax Service',
                price: 'Starting at $5'
            },
            {
                name: 'Facial Massage',
                price: 'Starting at $60'
            }
        ];

        const cosmetologyPriceList = [
            {
                name: 'Woman\'s Dry Cut',
                price: 15
            },
            {
                name: 'Woman\'s Cut & Style',
                price: 20
            },
            {
                name: 'Woman\'s Shampoo, Cut, & Style',
                price: 30
            },
            {
                name: 'Woman\'s Formal Hair',
                price: 'Variable'
            },
            {
                name: 'Chemical Service',
                price: 'Variable'
            },
            {
                name: 'Deep Conditioning Treatment',
                price: 45
            },
            {
                name: 'Braids',
                price: 10
            },
            {
                name: 'Facial Massage',
                price: 'Starting at $60'
            },
            {
                name: 'Lash Extensions',
                price: 'Variable'
            }
        ];
        return (
            <>
                <section className="clients">
                    <div className="section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title text-center">
                                        <h2>Services</h2>
                                    </div>
                                    <div className="col-md-8 offset-md-2">
                                        <ServiceList barberingPriceList={barberingPriceList} cosmetologyPriceList={cosmetologyPriceList} />
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
export default Services;