import React, { Component } from 'react'
import GroceryDetail from './GroceryDetail';

export default class GroceryList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section">
            <div className="columns is-multiline">
            {
                
                this.props.data.map(item => {
                    return <GroceryDetail key={item.item_id} item={item}
                    />
                })
               
            }
            </div>
            </section>
            </React.Fragment>
        )
    }
}
