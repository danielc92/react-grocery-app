import React, { Component } from 'react'

export default class GroceryDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <article style={{border:'2px solid black', padding: '0.5rem', margin: '1rem'}}>
                    <h3>{this.props.item.item_name}</h3>
                    <p>brand: {this.props.item.brand_name}</p>
                    <p>ingredients: {this.props.item.nf_ingredient_statement}</p>
                    <code>last updated: {this.props.item.updated_at}</code>
                </article>
            </React.Fragment>
        )
    }
}
