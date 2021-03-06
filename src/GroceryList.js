import React, { Component } from 'react'
import GroceryDetail from './GroceryDetail';

export default class GroceryList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section">
            <section className="container">

            <div className="content">
                <h3>Products</h3>
            </div>
            <div className="columns is-multiline">
            {
                
                this.props.data.map(item => {
                    return <GroceryDetail modifyRating={this.props.modifyRating} modifyStock={this.props.modifyStock} deleteGrocery={this.props.deleteGrocery} key={item.uuid} item={item}
                    />
                })
               
            }
            </div>
            </section>
            </section>
            </React.Fragment>
        )
    }
}
