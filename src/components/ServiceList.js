import React from 'react';

export class ServiceList extends React.Component {
    render() {
        return(
            <>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="title center">{this.props.specialty}</div>
                        <div className="features">
                            <table className="table table-borderless">
                                <tbody>
                                    {this.props.priceList.map((service, i) => (
                                        <tr key={'service_' + i}>
                                            <td>{service.name}</td>
                                            <td className="right">{(typeof service.price === 'number') ? `$${service.price}` : service.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ServiceList;