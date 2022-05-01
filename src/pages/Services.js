import React from 'react';
import ServiceTable from '../components/ServiceTable';
import BarberServiceList from '../data/BarberServiceList';
import CosmetologyServiceList from '../data/CosmetologyServiceList';

export class Services extends React.Component {
    render() {
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
                                        <div className="row">
                                            <ServiceTable priceList={BarberServiceList.barberServices} specialty='Barbering' />
                                            <ServiceTable priceList={CosmetologyServiceList.cosmetologyServices} specialty='Cosmetology' />
                                        </div>
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