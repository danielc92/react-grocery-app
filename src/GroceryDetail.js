import React, { Component } from 'react';

export default class GroceryDetail extends Component {

    checkItemExists = (item, item_desc) => {
        if (item) {
            return item
        } else {
            return `${item_desc} data doe not exist for this grocery...`
        }
    }

    render() {
        return (
<React.Fragment>
    <article className="column is-one-third-fullhd is-one-third-desktop is-one-half">
        <div className="notification">
            <div className="content">
                <h5 className="title">{this.props.item.item_name}</h5>
                <p className="tag is-small is-warning">{this.props.item.brand_name}</p>
                <p className="help has-text-link">{this.checkItemExists(this.props.item.nf_ingredient_statement, 'Ingredients')}</p>
                <p className="has-text-grey help">Last updated: {this.props.item.updated_at}</p>
                <a className="button is-outlined is-danger is-small">Delete</a>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
