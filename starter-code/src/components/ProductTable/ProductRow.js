import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        let elements = this.props.data.map((x) => {
            return <tr key={x.name}  >
                        <td>{x.name}</td>
                        <td>{x.price}</td>
                        <td>{x.stocked?'yes':'no'}</td>
                    </tr>
        });
        return (
            <tbody>
                {elements}
            </tbody>
        )
    }
}
