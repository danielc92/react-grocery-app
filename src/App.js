import React, { Component } from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import GroceryList from './GroceryList';
import Hero from './Hero';
import Footer from './Footer';
import GroceryForm from './GroceryForm';
import About from './About';
import uuid from 'uuid';



export default class App extends Component {
  
  state = { groceries: [
    {
        "name": "Almonds",
        "category": "Nuts",
        "image_name": "almonds-1768792_640.jpg",
        "image_source": "Pixabay",
        "uuid": "5e93dbd5-5226-493c-a1c5-9003ac7e4c24",
        "stock": 215,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Apricots",
        "category": "Fruit",
        "image_name": "apricots-2523272_640.jpg",
        "image_source": "Pixabay",
        "uuid": "7f032d2f-c6d6-4513-adb1-b708b8fb3d7c",
        "stock": 0,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Basil",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "top-view-1248955_640.jpg",
        "image_source": "Pixabay",
        "uuid": "6a7f955c-5e47-4028-92f2-33ec90b515f1",
        "stock": 29,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Beetroot",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "beetroot-687251_640.jpg",
        "image_source": "Pixabay",
        "uuid": "9a2297ed-1e0b-493c-88e7-04f02f26cbc6",
        "stock": 33,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Black Forest Ham",
        "category": "Meat",
        "image_name": "black-forest-ham-2278383_640.jpg",
        "image_source": "Pixabay",
        "uuid": "37c47195-2e51-477e-9345-3e5457f58be3",
        "stock": 45,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Blackberries",
        "category": "Fruit",
        "image_name": "blackberries-1539540_640.jpg",
        "image_source": "Pixabay",
        "uuid": "29701dde-7d41-44f9-9088-cd13cd6b064d",
        "stock": 196,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Blueberries",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "blueberries-2270379_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "1e403f22-ba7f-40a0-832b-dcd621b5ea34",
        "stock": 192,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Bread Loaf",
        "category": "Baked Goods",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "bread-1281053_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "cad776b2-e64f-451f-b61d-4b3dd431e153",
        "stock": 171,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Carrot",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "carrots-673184_640.jpg",
        "image_source": "Pixabay",
        "uuid": "6aa14d19-a5b0-4ce4-9b57-72de8bdfb824",
        "stock": 142,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Donut",
        "category": "Bakery",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "donut-1761520_640.jpg",
        "image_source": "Pixabay",
        "uuid": "b0c55775-2dca-461a-91b6-37943826d261",
        "stock": 142,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Garlic",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "category": "Vegetable",
        "image_name": "garlic-84691_640.jpg",
        "image_source": "Pixabay",
        "uuid": "ef8bcf92-7ce0-43d0-b514-afb7b0ff49a0",
        "stock": 246,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Grapes",
        "category": "Fruit",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "image_name": "grapes-276070_640.jpg",
        "image_source": "Pixabay",
        "uuid": "8f30166a-5aca-4d81-ac38-8878c633d94b",
        "stock": 220,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Lettuce",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "salad-1710328_640.jpg",
        "image_source": "Pixabay",
        "uuid": "cdbc2890-3bd2-41f0-a389-f28c356f4f66",
        "stock": 244,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Lollypop",
        "category": "Confectionary",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "lollys-50738_640.jpg",
        "image_source": "Pixabay",
        "uuid": "cc48ab5e-287e-4b51-a781-81a6071189c3",
        "stock": 50,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Minced Beef",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "category": "Meat",
        "image_name": "minced-meat-1747910_640.jpg",
        "image_source": "Pixabay",
        "uuid": "b757fe03-6801-47c0-adc6-c7e24da5b2d0",
        "stock": 27,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Olive Oil",
        "category": "Oils",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "olive-oil-968657_1920.jpg",
        "image_source": "Pixabay",
        "uuid": "da813e7c-e910-4187-ae03-895f1f28d9dd",
        "stock": 144,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Oranges",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "oranges-2100108_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "ff229051-d78a-446e-9343-387f9d6e22c4",
        "stock": 194,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Peach",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "peach-2573836_640.jpg",
        "image_source": "Pixabay",
        "uuid": "ff20300b-d5fe-4f34-839e-05c164bc77a8",
        "stock": 223,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Pear",
        "category": "Fruit",
        "image_name": "fruit-1534494_640.jpg",
        "image_source": "Pixabay",
        "uuid": "53b684a2-0ae5-4083-b3c1-6372e5ab9801",
        "stock": 15,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Peas",
        "category": "Vegetables",
        "image_name": "pea-1205673_640.jpg",
        "image_source": "Pixabay",
        "uuid": "3ab03058-5cad-43e9-bed0-8d3d88437dc0",
        "stock": 239,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Plums",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "plums-3641844_640.jpg",
        "image_source": "Pixabay",
        "uuid": "831353cc-93f6-432e-bb0e-d6c0284d50f2",
        "stock": 17,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Potatoes",
        "category": "Vegetables",
        "image_name": "potatoes-1585060_640.jpg",
        "image_source": "Pixabay",
        "uuid": "97e75c45-e9df-4916-9cf9-a4c7330403a3",
        "stock": 221,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Raspberries",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "raspberries-1426859_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "33b8f64f-d997-4e70-a824-89368a6b3dfc",
        "stock": 48,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Sausage",
        "category": "Meat",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "grill-sausage-4249707_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "b80f8d7f-a75d-4bea-81e9-b731096102bb",
        "stock": 14,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Shish Kebab",
        "category": "Meat",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "image_name": "shish-kebab-417994_640.jpg",
        "image_source": "Pixabay",
        "uuid": "9738c0ad-1d71-4747-9651-b9741a096293",
        "stock": 31,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Steak",
        "category": "Meat",
        "image_name": "meat-3139641_640.jpg",
        "image_source": "Pixabay",
        "uuid": "33f4ee54-5cbb-4246-9b18-de1c6db2077b",
        "stock": 174,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Strawberries",
        "last_updated": "2019-06-06T04:46:16.540Z",
        "category": "Fruit",
        "image_name": "strawberries-1330459_640.jpg",
        "image_source": "Pixabay",
        "uuid": "3079b8ae-bf9c-4a79-b4b3-11f17ce59cc7",
        "stock": 231,
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    },
    {
        "name": "Tangerines",
        "category": "Fruit",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "tangerines-1721590_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "e1f0883f-3d93-49de-89e5-8c934b6bea61",
        "stock": 0,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Tic Tacs",
        "category": "Confectionary",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "tic-tacs-1420767_640.jpg",
        "image_source": "Pixabay",
        "uuid": "3261aab1-61b6-496b-ae90-32b982709bba",
        "stock": 90,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Tomatoes",
        "category": "Vegetables",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",
        "image_name": "tomatoes-1280859_640.jpg",
        "image_source": "Pixabay",
        "weight_grams": 1000,
        "uuid": "5a66ba01-ba0a-4081-8f20-b549ffd0476e",
        "stock": 0,
        "last_updated": "2019-06-06T04:46:16.540Z"
    },
    {
        "name": "Walnuts",
        "category": "Nuts",
        "image_name": "walnut-1739021_640.jpg",
        "image_source": "Pixabay",
        "uuid": "bf4f87a7-f41b-42ae-b29c-36723a3b9feb",
        "stock": 91,
        "last_updated": "2019-06-06T04:46:16.540Z",
        "description": "Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."
    }
]}
  
  deleteGrocery = (id) => {
    this.setState({groceries: [...this.state.groceries.filter(item => item.uuid !== id)] })
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
