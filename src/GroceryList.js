import React, { Component } from 'react'
import GroceryDetail from './GroceryDetail';

export default class GroceryList extends Component {
    render() {
        return (
            <React.Fragment>
            {
                this.props.data.map(item => {
                    return <GroceryDetail key={item.item_id} item={item}
                    />
                })
            }
            </React.Fragment>
        )
    }
}
