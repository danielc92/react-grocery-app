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

    render() {
        return (
<React.Fragment>
    <article className="column is-one-quarter">
        <div className="notification">
            <div className="content">
                <img src={'./images/' + this.props.item.image_name}></img>
                <h5 className="title">{this.props.item.name}</h5>
                <p className="tag">
                <span className="tag is-small is-warning">{this.props.item.category}</span>    
                <span className="tag is-small is-warning">Stock:&nbsp;   <strong> {this.props.item.stock}</strong></span>    
                </p>
                <p className="has-text-info help">{this.props.item.description}</p>
                <p className="has-text-grey help">{this.props.item.last_updated}</p>
                <p className="has-text-grey help">{this.props.item.uuid}</p>
                <p className="buttons">
                    <button onClick={this.props.deleteGrocery.bind(this, this.props.item.uuid)} className="button is-outlined is-danger is-small">Delete</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, -1)} className="button is-outlined is-warning is-small">Decrement Stock</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, 1)} className="button is-outlined is-success is-small">Increment Stock</button>
                </p>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
