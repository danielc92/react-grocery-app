import React, { Component } from 'react'

export default class GroceryForm extends Component {

    labelStyle = {
        margin: '1rem 0rem', 
        fontSize:'0.90rem',
        color: '#4c4c4c'
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                <section className="container">
                <div className="content">
                <h3>Grocery Form</h3>
                </div>
                <section className="column is-three-fifths">
                <form className="form" onSubmit={this.props.addGrocery}>
                    <label style={this.labelStyle} className="label">Name</label>
                    <input placeholder="Enter grocery name here" required className="input" name="name"/>
                    
                    <label style={this.labelStyle} className="label">Brand</label>
                    <input placeholder="Enter brand name here" required className="input" name="brand"/>
                    
                    <label style={this.labelStyle} className="label">Ingredients</label>
                    <textarea placeholder="Enter list of ingredients here" required className="textarea" name="ingredients"></textarea>
                    <button type="submit" className="button is-outlined is-link">Add grocery</button>
                </form>
                </section>
                </section>
                </section>
            </React.Fragment>
        )
    }
}
