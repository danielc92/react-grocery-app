(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),o=a(23),n=a.n(o),s=a(17),u=a(2),c=a(3),l=a(5),m=a(4),d=a(6),p=a(11),g=a(10),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).checkStyle=function(e){return e?{color:"#209cee",fontSize:"0.7rem"}:{color:"grey",fontSize:"0.7rem"}},a.checkStock=function(e){return e>0?r.a.createElement("p",null,"stock ",e):r.a.createElement("p",null,"no stock")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"column is-one-quarter-fullhd is-one-third-desktop"},r.a.createElement("div",{className:"notification is-white",style:{boxShadow:"0 1px 4px 0 rgba(0,0,0,.14)",borderRadius:0}},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:"./images/"+this.props.item.image_name}),r.a.createElement("h5",{className:"title"},this.props.item.name),r.a.createElement("p",{className:"tags"},r.a.createElement("span",{className:"tag is-small is-warning"},this.props.item.category),r.a.createElement("span",{className:"tag is-small "+(this.props.item.stock>0?"is-success":"is-danger")},r.a.createElement("strong",null,this.props.item.stock>0?"Stock: "+this.props.item.stock:"out of stock"))),r.a.createElement("p",{className:"help"},this.props.item.description),r.a.createElement("p",{className:"buttons"},r.a.createElement("button",{onClick:this.props.deleteGrocery.bind(this,this.props.item.uuid),className:"button is-outlined is-danger is-small"},"Delete"),r.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,-1),className:"button is-outlined is-success is-small"},"Purchase One"),r.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,1),className:"button is-outlined is-success is-small"},"Restock One")),r.a.createElement("p",{className:"has-text-grey help"},"Last updated: ",r.a.createElement("strong",null,this.props.item.last_updated)),r.a.createElement("p",{className:"has-text-grey help"},"UUID: ",r.a.createElement("strong",null,this.props.item.uuid)),r.a.createElement("p",{className:"buttons"},r.a.createElement("a",{onClick:this.props.modifyRating.bind(this,this.props.item.uuid,1),className:"button is-success is-small"},r.a.createElement("span",{class:"icon"},r.a.createElement("i",{class:"far fa-thumbs-up"})),r.a.createElement("span",null,this.props.item.rated_positive)),r.a.createElement("a",{onClick:this.props.modifyRating.bind(this,this.props.item.uuid,-1),className:"button is-danger is-small"},r.a.createElement("span",{class:"icon"},r.a.createElement("i",{class:"far fa-thumbs-down"})),r.a.createElement("span",null,this.props.item.rated_negative)))))))}}]),t}(i.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Products")),r.a.createElement("div",{className:"columns is-multiline"},this.props.data.map(function(t){return r.a.createElement(b,{modifyRating:e.props.modifyRating,modifyStock:e.props.modifyStock,deleteGrocery:e.props.deleteGrocery,key:t.uuid,item:t})})))))}}]),t}(i.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-link is-bold is-medium"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(p.b,{to:"/",className:"navbar-item"},r.a.createElement("strong",null,"GROCERY APP")),r.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroB"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenuHeroB",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(p.b,{to:"/",className:"navbar-item"},"Home"),r.a.createElement(p.b,{to:"/about",className:"navbar-item"},"About"),r.a.createElement(p.b,{to:"/new-grocery",className:"navbar-item"},"Add Groceries"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{href:"https://github.com/danielc92/react-grocery-app",className:"button is-info is-inverted"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Source Code")))))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title"},"React Grocery App"),r.a.createElement("p",{className:"subtitle"},"Developed by Daniel Corcoran.")))))}}]),t}(i.Component),_=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{style:{padding:"4rem 2rem"},className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Grocery App")," by Daniel Corcoran. Built with React and Bulma CSS."))))}}]),t}(i.Component),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).labelStyle={margin:"1rem 0rem",fontSize:"0.90rem",color:"#4c4c4c"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Add a new grocery")),r.a.createElement("section",{className:"column is-three-fifths"},r.a.createElement("form",{className:"form",onSubmit:this.props.addGrocery},r.a.createElement("label",{style:this.labelStyle,className:"label"},"Name"),r.a.createElement("input",{placeholder:"Enter grocery name here",required:!0,className:"input",name:"name"}),r.a.createElement("label",{style:this.labelStyle,className:"label"},"Category"),r.a.createElement("input",{placeholder:"Enter category name here",required:!0,className:"input",name:"category"}),r.a.createElement("label",{style:this.labelStyle,className:"label"},"Description"),r.a.createElement("textarea",{required:!0,placeholder:"Enter item description here",className:"textarea",name:"description"}),r.a.createElement("button",{style:{marginTop:"1rem"},type:"submit",className:"button is-outlined is-link"},"Add grocery"))))))}}]),t}(i.Component),h=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).spanStyle={fontFamily:"monospace",color:"#209cee"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("section",{className:"content"},r.a.createElement("h3",null,"About Page"),r.a.createElement("p",null,"This application was developed soon after learning some of the important core React skills from online tutorials/documentation. I chose to build an app revolving around grocery items, because they're relatable and have many properties which can be updated through React. This application deals with the front-end only and does not make any calls to external or internal REST APIs."),r.a.createElement("p",null,"Throughout the development of the Grocery App I managed to cover the following core areas of React"),r.a.createElement("ul",null,r.a.createElement("li",null,"Creating and working with boiler plate React code with ",r.a.createElement("span",{style:this.spanStyle},"create-react-app")),r.a.createElement("li",null,"Creating and referencing ",r.a.createElement("span",{style:this.spanStyle},"React.Components")),r.a.createElement("li",null,"Dynamic routing with ",r.a.createElement("span",{style:this.spanStyle},"react-router-dom")),r.a.createElement("li",null,"Managing and updating the component level ",r.a.createElement("span",{style:this.spanStyle},"state")),r.a.createElement("li",null,"Working with forms"),r.a.createElement("li",null,"Conditional styles and classes"),r.a.createElement("li",null,"Deployment to ",r.a.createElement("span",{style:this.spanStyle},"gh-pages"))),r.a.createElement("h3",null,"Next Steps"),r.a.createElement("p",null,"After becoming more familiar with the core React principles. I want to move onto working on managing states more efficiently and at scale. Most likely, this will involve picking up a state manager such as Redux.")))))}}]),t}(i.Component),E=a(26),x=a.n(E),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={groceries:[{name:"Almonds",category:"Nuts",image_name:"almonds-1768792_640.jpg",image_source:"Pixabay",uuid:"5e93dbd5-5226-493c-a1c5-9003ac7e4c24",stock:215,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:29,rated_negative:12},{name:"Apricots",category:"Fruit",image_name:"apricots-2523272_640.jpg",image_source:"Pixabay",uuid:"7f032d2f-c6d6-4513-adb1-b708b8fb3d7c",stock:0,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",last_updated:"2019-06-06T04:46:16.540Z",rated_positive:14,rated_negative:0},{name:"Basil",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"top-view-1248955_640.jpg",image_source:"Pixabay",uuid:"6a7f955c-5e47-4028-92f2-33ec90b515f1",stock:29,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:14,rated_negative:1},{name:"Beetroot",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"beetroot-687251_640.jpg",image_source:"Pixabay",uuid:"9a2297ed-1e0b-493c-88e7-04f02f26cbc6",stock:33,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:15,rated_negative:1},{name:"Black Forest Ham",category:"Meat",image_name:"black-forest-ham-2278383_640.jpg",image_source:"Pixabay",uuid:"37c47195-2e51-477e-9345-3e5457f58be3",stock:45,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:29,rated_negative:11},{name:"Blackberries",category:"Fruit",image_name:"blackberries-1539540_640.jpg",image_source:"Pixabay",uuid:"29701dde-7d41-44f9-9088-cd13cd6b064d",stock:196,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:17,rated_negative:3},{name:"Blueberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"blueberries-2270379_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"1e403f22-ba7f-40a0-832b-dcd621b5ea34",stock:192,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:16,rated_negative:4},{name:"Bread Loaf",category:"Baked Goods",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"bread-1281053_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"cad776b2-e64f-451f-b61d-4b3dd431e153",stock:171,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:20,rated_negative:8},{name:"Carrot",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"carrots-673184_640.jpg",image_source:"Pixabay",uuid:"6aa14d19-a5b0-4ce4-9b57-72de8bdfb824",stock:142,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:13,rated_negative:8},{name:"Donut",category:"Bakery",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"donut-1761520_640.jpg",image_source:"Pixabay",uuid:"b0c55775-2dca-461a-91b6-37943826d261",stock:142,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:12,rated_negative:7},{name:"Garlic",last_updated:"2019-06-06T04:46:16.540Z",category:"Vegetable",image_name:"garlic-84691_640.jpg",image_source:"Pixabay",uuid:"ef8bcf92-7ce0-43d0-b514-afb7b0ff49a0",stock:246,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:19,rated_negative:5},{name:"Grapes",category:"Fruit",last_updated:"2019-06-06T04:46:16.540Z",image_name:"grapes-276070_640.jpg",image_source:"Pixabay",uuid:"8f30166a-5aca-4d81-ac38-8878c633d94b",stock:220,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:27,rated_negative:2},{name:"Lettuce",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"salad-1710328_640.jpg",image_source:"Pixabay",uuid:"cdbc2890-3bd2-41f0-a389-f28c356f4f66",stock:244,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:6,rated_negative:5},{name:"Lollypop",category:"Confectionary",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"lollys-50738_640.jpg",image_source:"Pixabay",uuid:"cc48ab5e-287e-4b51-a781-81a6071189c3",stock:50,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:3,rated_negative:9},{name:"Minced Beef",last_updated:"2019-06-06T04:46:16.540Z",category:"Meat",image_name:"minced-meat-1747910_640.jpg",image_source:"Pixabay",uuid:"b757fe03-6801-47c0-adc6-c7e24da5b2d0",stock:27,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:24,rated_negative:2},{name:"Olive Oil",category:"Oils",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"olive-oil-968657_1920.jpg",image_source:"Pixabay",uuid:"da813e7c-e910-4187-ae03-895f1f28d9dd",stock:144,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:16,rated_negative:2},{name:"Oranges",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"oranges-2100108_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"ff229051-d78a-446e-9343-387f9d6e22c4",stock:194,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:26,rated_negative:12},{name:"Peach",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"peach-2573836_640.jpg",image_source:"Pixabay",uuid:"ff20300b-d5fe-4f34-839e-05c164bc77a8",stock:223,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:30,rated_negative:9},{name:"Pear",category:"Fruit",image_name:"fruit-1534494_640.jpg",image_source:"Pixabay",uuid:"53b684a2-0ae5-4083-b3c1-6372e5ab9801",stock:15,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:30,rated_negative:1},{name:"Peas",category:"Vegetables",image_name:"pea-1205673_640.jpg",image_source:"Pixabay",uuid:"3ab03058-5cad-43e9-bed0-8d3d88437dc0",stock:239,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:16,rated_negative:7},{name:"Plums",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"plums-3641844_640.jpg",image_source:"Pixabay",uuid:"831353cc-93f6-432e-bb0e-d6c0284d50f2",stock:17,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:14,rated_negative:5},{name:"Potatoes",category:"Vegetables",image_name:"potatoes-1585060_640.jpg",image_source:"Pixabay",uuid:"97e75c45-e9df-4916-9cf9-a4c7330403a3",stock:221,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:28,rated_negative:4},{name:"Raspberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"raspberries-1426859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"33b8f64f-d997-4e70-a824-89368a6b3dfc",stock:48,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:17,rated_negative:12},{name:"Sausage",category:"Meat",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"grill-sausage-4249707_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"b80f8d7f-a75d-4bea-81e9-b731096102bb",stock:14,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:24,rated_negative:2},{name:"Shish Kebab",category:"Meat",last_updated:"2019-06-06T04:46:16.540Z",image_name:"shish-kebab-417994_640.jpg",image_source:"Pixabay",uuid:"9738c0ad-1d71-4747-9651-b9741a096293",stock:31,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:0,rated_negative:4},{name:"Steak",category:"Meat",image_name:"meat-3139641_640.jpg",image_source:"Pixabay",uuid:"33f4ee54-5cbb-4246-9b18-de1c6db2077b",stock:174,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:5,rated_negative:12},{name:"Strawberries",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"strawberries-1330459_640.jpg",image_source:"Pixabay",uuid:"3079b8ae-bf9c-4a79-b4b3-11f17ce59cc7",stock:231,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:22,rated_negative:6},{name:"Tangerines",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tangerines-1721590_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"e1f0883f-3d93-49de-89e5-8c934b6bea61",stock:0,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:5,rated_negative:3},{name:"Tic Tacs",category:"Confectionary",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tic-tacs-1420767_640.jpg",image_source:"Pixabay",uuid:"3261aab1-61b6-496b-ae90-32b982709bba",stock:90,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:24,rated_negative:7},{name:"Tomatoes",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tomatoes-1280859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"5a66ba01-ba0a-4081-8f20-b549ffd0476e",stock:0,last_updated:"2019-06-06T04:46:16.540Z",rated_positive:10,rated_negative:3},{name:"Walnuts",category:"Nuts",image_name:"walnut-1739021_640.jpg",image_source:"Pixabay",uuid:"bf4f87a7-f41b-42ae-b29c-36723a3b9feb",stock:91,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",rated_positive:22,rated_negative:11}]},a.deleteGrocery=function(e){a.setState({groceries:Object(s.a)(a.state.groceries.filter(function(t){return t.uuid!==e}))})},a.modifyRating=function(e,t){a.setState({groceries:a.state.groceries.map(function(a){if(e===a.uuid){1===t?a.rated_positive=a.rated_positive+1:-1===t&&(a.rated_negative=a.rated_negative+1);var i=(new Date).toGMTString();a.last_updated=i}return a})})},a.modifyStock=function(e,t){a.setState({groceries:a.state.groceries.map(function(a){if(e===a.uuid){var i=(new Date).toGMTString();a.last_updated=i;var r=a.stock+t;r>=0?a.stock=r:alert("No more stock available, you cannot purchase this item")}return a})})},a.addGrocery=function(e){e.preventDefault();var t=(new Date).toGMTString(),i={uuid:x.a.v4(),description:e.target.description.value,last_updated:t,name:e.target.name.value,image_name:"640x480.png",category:e.target.category.value,stock:0};a.setState({groceries:[].concat(Object(s.a)(a.state.groceries),[i])}),alert("You've successfully added a new grocery ".concat(e.target.name.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(g.a,{exact:!0,path:"/new-grocery",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{addGrocery:e.addGrocery}))}}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{modifyRating:e.modifyRating,modifyStock:e.modifyStock,deleteGrocery:e.deleteGrocery,data:e.state.groceries}))}}),r.a.createElement(g.a,{exact:!0,path:"/about",component:h}),r.a.createElement(_,null)))}}]),t}(i.Component);n.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.02e400ca.chunk.js.map