import React, { Component } from 'react';

export default class GroceryDetail extends Component {

    checkItemExists = (item, item_desc) => {
        if (item) {
            return item
        } else {
            return `${item_desc} does not exist.`
        }
    }

    render() {
        return (
<React.Fragment>
    <article className="column is-one-third-fullhd is-one-third-desktop is-one-half">
        <div className="notification">
            <div className="content">
                <h5 className="title">{this.props.item.item_name}</h5>
                <p>Brand: {this.props.item.brand_name}</p>
                <p className="help has-text-success">{this.checkItemExists(this.props.item.nf_ingredient_statement, 'Ingredient')}</p>
                <p className="has-text-grey help">Last updated: {this.props.item.updated_at}</p>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
