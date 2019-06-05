import React, { Component } from 'react';

export default class GroceryDetail extends Component {
    render() {
        return (
<React.Fragment>
    <article className="column is-one-third-fullhd is-one-third-desktop is-one-half">
        <div className="notification">
            <div className="content">
                <h3 className="title">{this.props.item.item_name}</h3>
                <p>{this.props.item.brand_name}</p>
                <p>{this.props.item.nf_ingredient_statement}</p>
                <p style={{fontFamily:'monospace'}}>{this.props.item.updated_at}</p>
            </div>
        </div>
    </article>
</React.Fragment>
        )
    }
}
