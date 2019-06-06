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
    <article className="column is-one-quarter">
        <div className="notification">
            <div className="content">
                <img src={'./images/' + this.props.item.image_name}></img>
                <h5 className="title">{this.props.item.name}</h5>
                <p className="tag is-small is-warning">{this.props.item.category}</p>
                <p style={this.checkStyle(this.props.item.description)}>{this.checkItemExists(this.props.item.description, 'Description')}</p>
                <p className="has-text-grey help">Last updated: {this.props.item.last_updated}</p>
                <p className="help has-text-link">uuid: {this.props.item.uuid}</p>
                <button onClick={this.props.deleteGrocery.bind(this, this.props.item.uuid)} className="button is-outlined is-danger is-small">Delete</button>
                <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, -1)} className="button is-outlined is-warning is-small">Decrement Stock</button>
                <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, 1)} className="button is-outlined is-success is-small">Increment Stock</button>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
