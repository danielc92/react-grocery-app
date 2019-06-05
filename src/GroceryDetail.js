import React, { Component } from 'react';

export default class GroceryDetail extends Component {

    checkItemExists = (item, item_desc) => {
        if (item) {
            return item
        } else {
            return `${item_desc} data does not exist for this grocery...`
        }
    }

    checkStyle = (item) => {
        if (item) {
            return {
                color: '#209cee',
                fontSize: '0.7rem'
            }
        } else {
            return {
                color: 'grey',
                fontSize: '0.7rem'
            }
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
                <p style={this.checkStyle(this.props.item.nf_ingredient_statement)}>{this.checkItemExists(this.props.item.nf_ingredient_statement, 'Ingredients')}</p>
                <p className="has-text-grey help">Last updated: {this.props.item.updated_at}</p>
                <button onClick={this.props.deleteGrocery.bind(this, this.props.item.id)} className="button is-outlined is-danger is-small">Delete</button>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
