import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    handleChange = (e) => {
        this.props.search(e.target.name, e.target.value)
    }
    handleCheck = (e) => {
        console.log(e.target.value)
        let checked = false&&e.target.value;
        console.log(checked)
        this.props.search(e.target.name, checked);
    }
    render() {
        return (
            <React.Fragment>
            <input name="value" onChange={this.handleChange} value={this.props.value}/><br />
            <input name="stocked" onChange={this.handleCheck}type="checkbox"/>Show only stocked
            </React.Fragment>
        )
    }
}
