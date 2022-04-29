import React from 'react';

export class ServiceList extends React.Component {
    render() {
        return(
            <>
                <table className="table table-dark table-striped table-sm">
                    <thead>
                        <tr>
                        <th>Service</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.priceList.map((service, i) => (
                            <tr key={'service_' + i}>
                                <td>{ service.name }</td>
                                <td>{(typeof service.price === 'number') ? `$${service.price}` : service.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}
export default ServiceList;