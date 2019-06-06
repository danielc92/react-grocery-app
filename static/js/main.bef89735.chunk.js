(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),r=a(23),n=a.n(r),s=a(17),u=a(2),c=a(3),l=a(5),m=a(4),d=a(6),p=a(11),g=a(10),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).checkStyle=function(e){return e?{color:"#209cee",fontSize:"0.7rem"}:{color:"grey",fontSize:"0.7rem"}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("article",{className:"column is-one-quarter-fullhd is-one-third-desktop"},o.a.createElement("div",{className:"notification"},o.a.createElement("div",{className:"content"},o.a.createElement("img",{src:"./images/"+this.props.item.image_name}),o.a.createElement("h5",{className:"title"},this.props.item.name),o.a.createElement("p",{className:"tags"},o.a.createElement("span",{className:"tag is-small is-warning"},this.props.item.category),o.a.createElement("span",{className:"tag is-small is-success"},"Stock:\xa0   ",o.a.createElement("strong",null," ",this.props.item.stock))),o.a.createElement("p",{className:"help"},this.props.item.description),o.a.createElement("p",null,o.a.createElement("code",{style:{backgroundColor:"transparent",fontSize:"0.8rem",color:"#4873b0"}},this.props.item.last_updated)),o.a.createElement("p",null,o.a.createElement("code",{style:{backgroundColor:"transparent",fontSize:"0.8rem",color:"#4873b0"}},this.props.item.uuid)),o.a.createElement("p",{className:"buttons"},o.a.createElement("button",{onClick:this.props.deleteGrocery.bind(this,this.props.item.uuid),className:"button is-outlined is-danger is-small"},"Delete Grocery"),o.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,-1),className:"button is-outlined is-success is-small"},"Purchase One Unit"),o.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,1),className:"button is-outlined is-success is-small"},"Restock One Unit"))))))}}]),t}(i.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section"},o.a.createElement("section",{className:"container"},o.a.createElement("div",{className:"content"},o.a.createElement("h3",null,"Grocery List")),o.a.createElement("div",{className:"columns is-multiline"},this.props.data.map(function(t){return o.a.createElement(b,{modifyStock:e.props.modifyStock,deleteGrocery:e.props.deleteGrocery,key:t.id,item:t})})))))}}]),t}(i.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"hero is-info is-medium"},o.a.createElement("div",{className:"hero-head"},o.a.createElement("nav",{className:"navbar"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement(p.b,{to:"/",className:"navbar-item"},o.a.createElement("strong",null,"GROCERY APP")),o.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroB"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("div",{id:"navbarMenuHeroB",className:"navbar-menu"},o.a.createElement("div",{className:"navbar-end"},o.a.createElement(p.b,{to:"/",className:"navbar-item"},"Home"),o.a.createElement(p.b,{to:"/about",className:"navbar-item"},"About"),o.a.createElement("span",{className:"navbar-item"},o.a.createElement("a",{href:"https://github.com/danielc92/react-grocery-app",className:"button is-info is-inverted"},o.a.createElement("span",{className:"icon"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("span",null,"Source Code")))))))),o.a.createElement("div",{className:"hero-body"},o.a.createElement("div",{className:"container has-text-centered"},o.a.createElement("p",{className:"title"},"React Grocery App"),o.a.createElement("p",{className:"subtitle"},"Developed by Daniel Corcoran.")))))}}]),t}(i.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{style:{padding:"4rem 2rem"},className:"footer"},o.a.createElement("div",{className:"content has-text-centered"},o.a.createElement("p",null,o.a.createElement("strong",null,"Grocery App")," by Daniel Corcoran. Built with React and Bulma CSS."))))}}]),t}(i.Component),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).labelStyle={margin:"1rem 0rem",fontSize:"0.90rem",color:"#4c4c4c"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section"},o.a.createElement("section",{className:"container"},o.a.createElement("div",{className:"content"},o.a.createElement("h3",null,"Grocery Form")),o.a.createElement("section",{className:"column is-three-fifths"},o.a.createElement("form",{className:"form",onSubmit:this.props.addGrocery},o.a.createElement("label",{style:this.labelStyle,className:"label"},"Name"),o.a.createElement("input",{placeholder:"Enter grocery name here",required:!0,className:"input",name:"name"}),o.a.createElement("label",{style:this.labelStyle,className:"label"},"Category"),o.a.createElement("input",{placeholder:"Enter category name here",required:!0,className:"input",name:"category"}),o.a.createElement("label",{style:this.labelStyle,className:"label"},"Description"),o.a.createElement("textarea",{required:!0,placeholder:"Enter item description here",className:"textarea",name:"description"}),o.a.createElement("button",{style:{marginTop:"1rem"},type:"submit",className:"button is-outlined is-link"},"Add grocery"))))))}}]),t}(i.Component),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).spanStyle={fontFamily:"monospace",color:"#209cee"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"section"},o.a.createElement("section",{className:"container"},o.a.createElement("section",{className:"content"},o.a.createElement("h3",null,"About Page"),o.a.createElement("p",null,"This application was developed soon after learning some of the important core React skills from online tutorials/documentation. I chose to build an app revolving around grocery items, because they're relatable and have many properties which can be updated through React. This application deals with the front-end only and does not make any calls to external or internal REST APIs."),o.a.createElement("p",null,"Throughout the development of the Grocery App I managed to cover the following core areas of React"),o.a.createElement("ul",null,o.a.createElement("li",null,"Creating and working with boiler plate React code with ",o.a.createElement("span",{style:this.spanStyle},"create-react-app")),o.a.createElement("li",null,"Creating and referencing ",o.a.createElement("span",{style:this.spanStyle},"React.Components")),o.a.createElement("li",null,"Dynamic routing with ",o.a.createElement("span",{style:this.spanStyle},"react-router-dom")),o.a.createElement("li",null,"Managing and updating the component level ",o.a.createElement("span",{style:this.spanStyle},"state")),o.a.createElement("li",null,"Working with forms"),o.a.createElement("li",null,"Conditional styles and classes"),o.a.createElement("li",null,"Deployment to ",o.a.createElement("span",{style:this.spanStyle},"gh-pages"))),o.a.createElement("h3",null,"Next Steps"),o.a.createElement("p",null,"After becoming more familiar with the core React principles. I want to move onto working on managing states more efficiently and at scale. Most likely, this will involve picking up a state manager such as Redux.")))))}}]),t}(i.Component),E=a(26),x=a.n(E),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={groceries:[{name:"Almonds",category:"Nuts",image_name:"almonds-1768792_640.jpg",image_source:"Pixabay",uuid:"5e93dbd5-5226-493c-a1c5-9003ac7e4c24",stock:215,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Apricots",category:"Fruit",image_name:"apricots-2523272_640.jpg",image_source:"Pixabay",uuid:"7f032d2f-c6d6-4513-adb1-b708b8fb3d7c",stock:87,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",last_updated:"2019-06-06T04:46:16.540Z"},{name:"Basil",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"top-view-1248955_640.jpg",image_source:"Pixabay",uuid:"6a7f955c-5e47-4028-92f2-33ec90b515f1",stock:29,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Beetroot",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"beetroot-687251_640.jpg",image_source:"Pixabay",uuid:"9a2297ed-1e0b-493c-88e7-04f02f26cbc6",stock:33,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Black Forest Ham",category:"Meat",image_name:"black-forest-ham-2278383_640.jpg",image_source:"Pixabay",uuid:"37c47195-2e51-477e-9345-3e5457f58be3",stock:45,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Blackberries",category:"Fruit",image_name:"blackberries-1539540_640.jpg",image_source:"Pixabay",uuid:"29701dde-7d41-44f9-9088-cd13cd6b064d",stock:196,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Blueberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"blueberries-2270379_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"1e403f22-ba7f-40a0-832b-dcd621b5ea34",stock:192,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Bread Loaf",category:"Baked Goods",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"bread-1281053_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"cad776b2-e64f-451f-b61d-4b3dd431e153",stock:171,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Carrot",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"carrots-673184_640.jpg",image_source:"Pixabay",uuid:"6aa14d19-a5b0-4ce4-9b57-72de8bdfb824",stock:142,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Donut",category:"Bakery",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"donut-1761520_640.jpg",image_source:"Pixabay",uuid:"b0c55775-2dca-461a-91b6-37943826d261",stock:142,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Garlic",last_updated:"2019-06-06T04:46:16.540Z",category:"Vegetable",image_name:"garlic-84691_640.jpg",image_source:"Pixabay",uuid:"ef8bcf92-7ce0-43d0-b514-afb7b0ff49a0",stock:246,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Grapes",category:"Fruit",last_updated:"2019-06-06T04:46:16.540Z",image_name:"grapes-276070_640.jpg",image_source:"Pixabay",uuid:"8f30166a-5aca-4d81-ac38-8878c633d94b",stock:220,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Lettuce",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"salad-1710328_640.jpg",image_source:"Pixabay",uuid:"cdbc2890-3bd2-41f0-a389-f28c356f4f66",stock:244,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Lollypop",category:"Confectionary",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"lollys-50738_640.jpg",image_source:"Pixabay",uuid:"cc48ab5e-287e-4b51-a781-81a6071189c3",stock:50,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Minced Beef",last_updated:"2019-06-06T04:46:16.540Z",category:"Meat",image_name:"minced-meat-1747910_640.jpg",image_source:"Pixabay",uuid:"b757fe03-6801-47c0-adc6-c7e24da5b2d0",stock:27,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Olive Oil",category:"Oils",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"olive-oil-968657_1920.jpg",image_source:"Pixabay",uuid:"da813e7c-e910-4187-ae03-895f1f28d9dd",stock:144,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Oranges",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"oranges-2100108_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"ff229051-d78a-446e-9343-387f9d6e22c4",stock:194,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Peach",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"peach-2573836_640.jpg",image_source:"Pixabay",uuid:"ff20300b-d5fe-4f34-839e-05c164bc77a8",stock:223,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Pear",category:"Fruit",image_name:"fruit-1534494_640.jpg",image_source:"Pixabay",uuid:"53b684a2-0ae5-4083-b3c1-6372e5ab9801",stock:15,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Peas",category:"Vegetables",image_name:"pea-1205673_640.jpg",image_source:"Pixabay",uuid:"3ab03058-5cad-43e9-bed0-8d3d88437dc0",stock:239,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Plums",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"plums-3641844_640.jpg",image_source:"Pixabay",uuid:"831353cc-93f6-432e-bb0e-d6c0284d50f2",stock:17,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Potatoes",category:"Vegetables",image_name:"potatoes-1585060_640.jpg",image_source:"Pixabay",uuid:"97e75c45-e9df-4916-9cf9-a4c7330403a3",stock:221,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Raspberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"raspberries-1426859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"33b8f64f-d997-4e70-a824-89368a6b3dfc",stock:48,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Sausage",category:"Meat",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"grill-sausage-4249707_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"b80f8d7f-a75d-4bea-81e9-b731096102bb",stock:14,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Shish Kebab",category:"Meat",last_updated:"2019-06-06T04:46:16.540Z",image_name:"shish-kebab-417994_640.jpg",image_source:"Pixabay",uuid:"9738c0ad-1d71-4747-9651-b9741a096293",stock:31,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Steak",category:"Meat",image_name:"meat-3139641_640.jpg",image_source:"Pixabay",uuid:"33f4ee54-5cbb-4246-9b18-de1c6db2077b",stock:174,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Strawberries",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"strawberries-1330459_640.jpg",image_source:"Pixabay",uuid:"3079b8ae-bf9c-4a79-b4b3-11f17ce59cc7",stock:231,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Tangerines",category:"",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tangerines-1721590_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"e1f0883f-3d93-49de-89e5-8c934b6bea61",stock:167,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Tic Tacs",category:"Confectionary",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tic-tacs-1420767_640.jpg",image_source:"Pixabay",uuid:"3261aab1-61b6-496b-ae90-32b982709bba",stock:90,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Tomatoes",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tomatoes-1280859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"5a66ba01-ba0a-4081-8f20-b549ffd0476e",stock:150,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Walnuts",category:"Nuts",image_name:"walnut-1739021_640.jpg",image_source:"Pixabay",uuid:"bf4f87a7-f41b-42ae-b29c-36723a3b9feb",stock:91,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."}]},a.deleteGrocery=function(e){a.setState({groceries:Object(s.a)(a.state.groceries.filter(function(t){return t.uuid!==e}))})},a.modifyStock=function(e,t){a.setState({groceries:a.state.groceries.map(function(a){if(e===a.uuid){var i=a.stock+t;i>=0?a.stock=i:alert("No more stock available, you cannot purchase this item")}return a})})},a.addGrocery=function(e){e.preventDefault();var t=(new Date).toJSON(),i={uuid:x.a.v4(),description:e.target.description.value,last_updated:t,name:e.target.name.value,category:e.target.category.value,stock:0};a.setState({groceries:[].concat(Object(s.a)(a.state.groceries),[i])}),alert("You've successfully added a new grocery ".concat(e.target.name.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null),o.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(_,{addGrocery:e.addGrocery}),o.a.createElement(f,{modifyStock:e.modifyStock,deleteGrocery:e.deleteGrocery,data:e.state.groceries}))}}),o.a.createElement(g.a,{exact:!0,path:"/about",component:h}),o.a.createElement(y,null)))}}]),t}(i.Component);n.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bef89735.chunk.js.map