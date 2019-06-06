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
    <article className="column is-one-quarter-fullhd is-one-third-desktop">
        <div className="notification">
            <div className="content">
                <img src={'./images/' + this.props.item.image_name}></img>
                <h5 className="title">{this.props.item.name}</h5>
                <p className="tags">
                <span className="tag is-small is-warning">{this.props.item.category}</span>    
                <span className="tag is-small is-success">Stock:&nbsp;   <strong> {this.props.item.stock}</strong></span>    
                </p>
                <p className="help">{this.props.item.description}</p>
                <p><code style={{ backgroundColor:'transparent', fontSize: '0.8rem', color: '#4873b0' }}>{this.props.item.last_updated}</code></p>
                <p><code style={{ backgroundColor:'transparent', fontSize: '0.8rem', color: '#4873b0' }}>{this.props.item.uuid}</code></p>
                <p className="buttons">
                    <button onClick={this.props.deleteGrocery.bind(this, this.props.item.uuid)} className="button is-outlined is-danger is-small">Delete Grocery</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, -1)} className="button is-outlined is-success is-small">Purchase One Unit</button>
                    <button onClick={this.props.modifyStock.bind(this, this.props.item.uuid, 1)} className="button is-outlined is-success is-small">Restock One Unit</button>
                </p>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
