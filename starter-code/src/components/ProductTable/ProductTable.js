import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Price:</th>
                        <th>Available:</th>
                    </tr>
                </thead>
                    <ProductRow data={this.props.data} />
            </table>
        )
    }
}
