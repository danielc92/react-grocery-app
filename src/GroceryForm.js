import React, { Component } from 'react'
import GroceryDetail from './GroceryDetail';

export default class GroceryForm extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="section">
            <section className="container">

            <h6 className="title">Grocery Form</h6>
            <div className="content">
                <form onSubmit={this.props.}>


                </form>

            </div>
            </section>
            </section>
            </React.Fragment>
        )
    }
}
