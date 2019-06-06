import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import GroceryList from './GroceryList';
import Hero from './Hero';
import Footer from './Footer';
import GroceryForm from './GroceryForm';
import About from './About';
import {uuid} from 'uuid';



export default class App extends Component {
  
  state = { groceries: [
    {
        "name": "Olive Oil",
        "category": "Oils",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "olive-oil-968657_1920.jpg",
        "image_source": "Pixabay",
        "uuid": "398f30ac-8b0c-40da-a04a-2dd9a0e8164d",
        "stock": 65,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Tangerines",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "tangerines-1721590_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "4e307ef5-ffa6-43ff-ad48-c7b913db43d8",
        "stock": 95,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Bread Loaf",
        "category": "Baked Goods",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "bread-1281053_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "3828ee56-702f-44eb-9a98-9f16c6c126f8",
        "stock": 197,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Blueberries",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "blueberries-2270379_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "d21979ec-eaa3-4d89-a778-86175a62b6eb",
        "stock": 248,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Sausage",
        "category": "Meat",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "grill-sausage-4249707_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "1c90d1ae-dc18-4346-9cf1-9c40e2f6d475",
        "stock": 88,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Tomatoes",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "tomatoes-1280859_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "9f7e8c7c-1aa6-43c7-9f22-76e85dff3adb",
        "stock": 128,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Oranges",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "oranges-2100108_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "3d540c90-a43c-4ed2-be98-aab932048835",
        "stock": 130,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Raspberries",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "raspberries-1426859_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "d906a13c-4a05-470b-860f-d0fcd1c8f0cf",
        "stock": 257,
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Potatoes",
        "category": "Vegetables",
        "image_name": "potatoes-1585060_640.jpg",
        "image_source": "Pixabay",
        "uuid": "57a5068e-48d6-4993-a0ad-872a1ecadc1b",
        "stock": 66,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Apricots",
        "category": "Fruit",
        "image_name": "apricots-2523272_640.jpg",
        "image_source": "Pixabay",
        "uuid": "de874a65-a8e1-4906-9274-5f27dbd9a4c2",
        "stock": 123,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "last_updated":"2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Blackberries",
        "category": "Fruit",
        "image_name": "blackberries-1539540_640.jpg",
        "image_source": "Pixabay",
        "uuid": "38358988-54d9-4569-8ccb-265a9b599aa3",
        "stock": 231,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Steak",
        "category": "Meat",
        "image_name": "meat-3139641_640.jpg",
        "image_source": "Pixabay",
        "uuid": "bfc2e48d-7d6e-49c6-8f98-13acc335abcc",
        "stock": 175,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Black Forest Ham",
        "category": "Meat",
        "image_name": "black-forest-ham-2278383_640.jpg",
        "image_source": "Pixabay",
        "uuid": "d47550a1-6b7c-4a8c-8a96-ef73bb125caa",
        "stock": 93,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Walnuts",
        "category": "Nuts",
        "image_name": "walnut-1739021_640.jpg",
        "image_source": "Pixabay",
        "uuid": "85b79c92-415d-4e79-a337-1d29f0be0cd2",
        "stock": 101,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Almonds",
        "category": "Nuts",
        "image_name": "almonds-1768792_640.jpg",
        "image_source": "Pixabay",
        "uuid": "8def70ed-bf25-4748-98f2-c3ddf5bc0428",
        "stock": 64,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Shish Kebab",
        "category": "Meat",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "image_name": "shish-kebab-417994_640.jpg",
        "image_source": "Pixabay",
        "uuid": "f681c3f5-7f8c-4404-96bb-2a5b2ea76bbf",
        "stock": 235,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Grapes",
        "category": "Fruit",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "image_name": "grapes-276070_640.jpg",
        "image_source": "Pixabay",
        "uuid": "07271f7f-924d-40cd-8046-b3a49258c3fd",
        "stock": 219,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Plums",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "plums-3641844_640.jpg",
        "image_source": "Pixabay",
        "uuid": "64e1986c-d0d2-451c-8775-af9b6bc69532",
        "stock": 59,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Minced Beef",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "category": "Meat",
        "image_name": "minced-meat-1747910_640.jpg",
        "image_source": "Pixabay",
        "uuid": "05ecf213-c359-476b-9f10-ac9a39430d5a",
        "stock": 210,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Garlic",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "category": "Vegetable",
        "image_name": "garlic-84691_640.jpg",
        "image_source": "Pixabay",
        "uuid": "22347449-313f-4669-a187-5624c331ac56",
        "stock": 293,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Strawberries",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "strawberries-1330459_640.jpg",
        "image_source": "Pixabay",
        "uuid": "a2d13cfe-aca2-4de0-ae87-6f3b5df2f8f6",
        "stock": 161,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Peach",
        "last_updated":"2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "peach-2573836_640.jpg",
        "image_source": "Pixabay",
        "uuid": "c69837e5-ad48-4300-8f15-8c34281bd56f",
        "stock": 176,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Peas",
        "category": "Vegetables",
        "image_name": "pea-1205673_640.jpg",
        "image_source": "Pixabay",
        "uuid": "32954c41-262b-47b0-8f38-174f76b24f18",
        "stock": 59,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Pear",
        "category": "Fruit",
        "image_name": "fruit-1534494_640.jpg",
        "image_source": "Pixabay",
        "uuid": "66751410-181a-4692-a728-ebb172390ec2",
        "stock": 178,
        "last_updated":"2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    }
]}
  
  deleteGrocery = (id) => {
    this.setState({groceries: [...this.state.groceries.filter(item => item.uuid !== id)] })
  }


  modifyStock = (uuid, increment) => {
    this.setState({groceries: this.state.groceries.map(grocery => {
        if (uuid === grocery.uuid) {
            grocery.stock = grocery.stock + increment
        }
        return grocery;
        })
    });
  }


  addGrocery = (e) => {
    
    e.preventDefault();

    let timestamp = new Date().toJSON();
    let new_grocery = {
      id: uuid.v4(),
      nf_ingredient_statement:  e.target.ingredients.value,
      updated_at: timestamp,
      item_name: e.target.name.value,
      brand_name: e.target.brand.value

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

          <Route exact path="/" render={props => (
            <React.Fragment>
              {/* Grocery Form */}
              <GroceryForm addGrocery={this.addGrocery} />

              {/* Grocery List */}
              <GroceryList modifyStock={this.modifyStock} deleteGrocery={this.deleteGrocery} data={this.state.groceries}/>
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
