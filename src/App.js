import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import GroceryList from './GroceryList';
import Hero from './Hero';
import Footer from './Footer';
import GroceryForm from './GroceryForm';
import About from './About';
import uuid from 'uuid';
import JSON from './data/data.json';


export default class App extends Component {
  
  state = { 
      groceries: [] 
  }

  componentDidMount () {
      this.setState({groceries: JSON})
  }
  
  deleteGrocery = (id) => {
    this.setState({groceries: [...this.state.groceries.filter(item => item.uuid !== id)] })
  }


  modifyRating = (uuid, rating_dir) => {
    this.setState({groceries: this.state.groceries.map(grocery => {
        // Check UUID matches throughout map
        if (uuid === grocery.uuid) {

            // Increment or decrement based on flag 
            if (rating_dir === 1) {
                grocery.rated_positive = grocery.rated_positive + 1;
                
            } else if (rating_dir === -1){
                grocery.rated_negative = grocery.rated_negative + 1;
            }

            // Set modified timestamp after updating ratings
            let timestamp = new Date().toGMTString();
            grocery.last_updated = timestamp;
        }
        return grocery;
        })
    });
  }


  modifyStock = (uuid, increment) => {
    this.setState({groceries: this.state.groceries.map(grocery => {
        // Check if no more stock is available, if not add or decrease stock level
        if (uuid === grocery.uuid) {

            // Set the timestamp
            let timestamp = new Date().toGMTString();
            grocery.last_updated = timestamp;


            let new_value = grocery.stock + increment;
            if (new_value >= 0) {
                grocery.stock = new_value;
                
            } else {
                alert('No more stock available, you cannot purchase this item');
            }
        }
        return grocery;
        })
    });
  }


  addGrocery = (e) => {
    
    e.preventDefault();

    let timestamp = new Date().toGMTString();
    let new_grocery = {
      uuid: uuid.v4(),
      description:  e.target.description.value,
      last_updated: timestamp,
      name: e.target.name.value,
      image_name: '640x480.png',
      category: e.target.category.value,
      stock: 0

    }

    this.setState({groceries: [...this.state.groceries, new_grocery]});

    alert(`You've successfully added a new grocery ${e.target.name.value}`);

  }

  render() {
    return (
      <Router>
        <React.Fragment>
          {/* Hero */}
          <Hero/>
          <Route exact path="/new-grocery" render={props => (
            <React.Fragment>
                {/* Grocery Form */}
              <GroceryForm addGrocery={this.addGrocery} />

            </React.Fragment>
          )}/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              {/* Grocery List */}
              <GroceryList modifyRating={this.modifyRating} modifyStock={this.modifyStock} deleteGrocery={this.deleteGrocery} data={this.state.groceries}/>
              </React.Fragment>
          )}/>

          <Route exact path="/about" component={About}/>
          
          {/* Footer */}
          <Footer/>
        </React.Fragment>
      </Router>
    )
  }
}
