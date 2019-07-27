import React, { Component } from 'react'
import ProductTable from './ProductTable/ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json'

export default class FilterableProductTable extends Component {
    state = {
        value: '',
        stocked: false,
        data: data.data
    }
    onSearchChange = (name, value) => {
        console.log(name, value)
        this.setState({
            [name]: value
        });
    }
    render() {
        const products = data.data.filter(x => {
            if(this.state.stocked&&x.stocked || !this.state.stocked) return x.name.toLowerCase().includes(this.state.value.toLowerCase())
        })
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar checked={this.state.stocked} value={this.state.value} search={this.onSearchChange} />
                <ProductTable data={products}/>
            </div>
        )
    }
}
