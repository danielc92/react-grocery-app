import React, { Component } from 'react'
import GroceryDetail from './GroceryDetail';

export default class GroceryList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section">
            <section className="container">

            <h6 className="title">Grocery List</h6>
            <div className="columns is-multiline">
            {
                
                this.props.data.map(item => {
                    return <GroceryDetail deleteGrocery={this.props.deleteGrocery} key={item.id} item={item}
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
