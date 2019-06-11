import React, { Component } from 'react';

export default class GroceryDetail extends Component {

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

    checkStock = (stock) => {
        return (stock > 0) ? <p>stock {stock}</p>: <p>no stock</p> 
    }

    render() {
        return (
<React.Fragment>
    <article className="column is-one-quarter-fullhd is-one-third-desktop">
        <div className="notification">
            <div className="content">
                <img src={'./images/' + this.props.item.image_name}></img>
                <h5 className="title">{this.props.item.name}</h5>
                <p className="tags">
                <span className="tag is-small is-warning">{this.props.item.category}</span>    
                <span className={"tag is-small " + (this.props.item.stock > 0 ? 'is-success' : 'is-danger')}><strong>{this.props.item.stock > 0 ? 'Stock: ' + this.props.item.stock : 'out of stock'}</strong></span>    
                </p>
                <p className="help">{this.props.item.description}</p>
                
                <p className="buttons">
                    <button onClick={this.props.deleteGrocery.bind(this, this.props.item.uuid)} className="button is-outlined is-danger is-small">Delete</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, -1)} className="button is-outlined is-success is-small">Purchase One</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, 1)} className="button is-outlined is-success is-small">Restock One</button>
                </p>

                <p className="has-text-grey help">Last updated: <strong>{this.props.item.last_updated}</strong></p>
                <p className="has-text-grey help">UUID: <strong>{this.props.item.uuid}</strong></p>
                
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
