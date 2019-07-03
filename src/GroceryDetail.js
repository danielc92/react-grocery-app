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
    <article className="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-full">
        <div className="notification is-white" 
        style={{boxShadow:'0 1px 4px 0 rgba(0,0,0,.14)', borderRadius:0}}>
            <div className="content">
                <img src={'./images/' + this.props.item.image_name}></img>
                <h5 style={{margin: '1rem 0rem'}} className="title">{this.props.item.name}</h5>
                <p className="tags">
                <span className="tag is-small is-light">{this.props.item.category}</span>    
                <span className={"tag is-small " + (this.props.item.stock > 0 
                ? 'is-success' 
                : 'is-danger')}>{this.props.item.stock > 0 ? 'Stock: ' + this.props.item.stock : 'out of stock'}</span>    
                </p>
                <p className="help">{this.props.item.description}</p>
                
                <p className="buttons">
                    <button onClick={this.props.deleteGrocery.bind(this, this.props.item.uuid)} className="button is-outlined is-danger is-small">Delete</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, -1)} className="button is-outlined is-success is-small">Purchase One</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, 1)} className="button is-outlined is-success is-small">Restock One</button>
                </p>

                <p className="has-text-grey help">Last updated: <strong>{this.props.item.last_updated}</strong></p>
                <p className="has-text-grey help">UUID: <strong>{this.props.item.uuid}</strong></p>
                
                <p className="buttons">
                    <a onClick={this.props.modifyRating.bind(this, this.props.item.uuid, 1)} className="button is-success is-small">
                        <span class="icon"><i class="far fa-thumbs-up"></i></span>
                        <span>{this.props.item.rated_positive}</span>
                    </a>
                    <a onClick={this.props.modifyRating.bind(this, this.props.item.uuid, -1)} className="button is-danger is-small">
                        <span class="icon"><i class="far fa-thumbs-down"></i></span>
                        <span>{this.props.item.rated_negative}</span>
                    </a>
                </p>
                
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
