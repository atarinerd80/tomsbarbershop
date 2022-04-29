import React from 'react';

export class ServiceList extends React.Component {
    render() {
        return(
            <>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="title center">Barbering</div>
                            <div className="features">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            {this.props.barberingPriceList.map((service, i) => (
                                                <li key={'service_' + i}>{service.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-6 right">
                                        <ul>
                                            {this.props.barberingPriceList.map((service, i) => (
                                                <li key={'service_' + i}>{(typeof service.price === 'number') ? `$${service.price}` : service.price}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="title center">Cosmetology</div>
                            <div className="features">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            {this.props.cosmetologyPriceList.map((service, i) => (
                                                <li key={'service_' + i}>{service.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-6 right">
                                        <ul>
                                            {this.props.cosmetologyPriceList.map((service, i) => (
                                                <li key={'service_' + i}>{(typeof service.price === 'number') ? `$${service.price}` : service.price}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ServiceList;