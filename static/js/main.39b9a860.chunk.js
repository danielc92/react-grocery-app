(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),o=a(23),n=a.n(o),s=a(17),c=a(2),l=a(3),u=a(5),m=a(4),d=a(6),p=a(13),g=a(10),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).checkStyle=function(e){return e?{color:"#209cee",fontSize:"0.7rem"}:{color:"grey",fontSize:"0.7rem"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"column is-one-quarter-fullhd is-one-third-desktop"},r.a.createElement("div",{className:"notification"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:"./images/"+this.props.item.image_name}),r.a.createElement("h5",{className:"title"},this.props.item.name),r.a.createElement("p",{className:"tags"},r.a.createElement("span",{className:"tag is-small is-warning"},this.props.item.category),r.a.createElement("span",{className:"tag is-small is-success"},"Stock:\xa0   ",r.a.createElement("strong",null," ",this.props.item.stock))),r.a.createElement("p",{className:"help"},this.props.item.description),r.a.createElement("p",null,r.a.createElement("code",{style:{backgroundColor:"transparent",fontSize:"0.8rem",color:"#4873b0"}},this.props.item.last_updated)),r.a.createElement("p",null,r.a.createElement("code",{style:{backgroundColor:"transparent",fontSize:"0.8rem",color:"#4873b0"}},this.props.item.uuid)),r.a.createElement("p",{className:"buttons"},r.a.createElement("button",{onClick:this.props.deleteGrocery.bind(this,this.props.item.uuid),className:"button is-outlined is-danger is-small"},"Delete Grocery"),r.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,-1),className:"button is-outlined is-success is-small"},"Purchase One Unit"),r.a.createElement("button",{onClick:this.props.modifyStock.bind(this,this.props.item.uuid,1),className:"button is-outlined is-success is-small"},"Restock One Unit"))))))}}]),t}(i.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Grocery List")),r.a.createElement("div",{className:"columns is-multiline"},this.props.data.map(function(t){return r.a.createElement(b,{modifyStock:e.props.modifyStock,deleteGrocery:e.props.deleteGrocery,key:t.id,item:t})})))))}}]),t}(i.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-info is-medium"},r.a.createElement("div",{className:"hero-head"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"http://localhost:3000",className:"navbar-item"},r.a.createElement("strong",null,"GROCERY APP")),r.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenuHeroB"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navbarMenuHeroB",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(p.b,{to:"/",className:"navbar-item"},"Home"),r.a.createElement(p.b,{to:"/about",className:"navbar-item"},"About"),r.a.createElement("span",{className:"navbar-item"},r.a.createElement("a",{href:"https://github.com/danielc92/react-grocery-app",className:"button is-info is-inverted"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("span",null,"Source Code")))))))),r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("p",{className:"title"},"React Grocery App"),r.a.createElement("p",{className:"subtitle"},"Developed by Daniel Corcoran.")))))}}]),t}(i.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{style:{padding:"4rem 2rem"},className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Grocery App")," by Daniel Corcoran. Built with React and Bulma CSS."))))}}]),t}(i.Component),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).labelStyle={margin:"1rem 0rem",fontSize:"0.90rem",color:"#4c4c4c"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,"Grocery Form")),r.a.createElement("section",{className:"column is-three-fifths"},r.a.createElement("form",{className:"form",onSubmit:this.props.addGrocery},r.a.createElement("label",{style:this.labelStyle,className:"label"},"Name"),r.a.createElement("input",{placeholder:"Enter grocery name here",required:!0,className:"input",name:"name"}),r.a.createElement("label",{style:this.labelStyle,className:"label"},"Category"),r.a.createElement("input",{placeholder:"Enter category name here",required:!0,className:"input",name:"category"}),r.a.createElement("label",{style:this.labelStyle,className:"label"},"Description"),r.a.createElement("textarea",{required:!0,placeholder:"Enter item description here",className:"textarea",name:"description"}),r.a.createElement("button",{style:{marginTop:"1rem"},type:"submit",className:"button is-outlined is-link"},"Add grocery"))))))}}]),t}(i.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).spanStyle={fontFamily:"monospace",color:"#209cee"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("section",{className:"container"},r.a.createElement("section",{className:"content"},r.a.createElement("h3",null,"About Page"),r.a.createElement("p",null,"This application was developed soon after learning some of the important core React skills from online tutorials/documentation. I chose to build an app revolving around grocery items, because they're relatable and have many properties which can be updated through React. This application deals with the front-end only and does not make any calls to external or internal REST APIs."),r.a.createElement("p",null,"Throughout the development of the Grocery App I managed to cover the following core areas of React"),r.a.createElement("ul",null,r.a.createElement("li",null,"Creating and working with boiler plate React code with ",r.a.createElement("span",{style:this.spanStyle},"create-react-app")),r.a.createElement("li",null,"Creating and referencing ",r.a.createElement("span",{style:this.spanStyle},"React.Components")),r.a.createElement("li",null,"Dynamic routing with ",r.a.createElement("span",{style:this.spanStyle},"react-router-dom")),r.a.createElement("li",null,"Managing and updating the component level ",r.a.createElement("span",{style:this.spanStyle},"state")),r.a.createElement("li",null,"Working with forms"),r.a.createElement("li",null,"Conditional styles and classes"),r.a.createElement("li",null,"Deployment to ",r.a.createElement("span",{style:this.spanStyle},"gh-pages"))),r.a.createElement("h3",null,"Next Steps"),r.a.createElement("p",null,"After becoming more familiar with the core React principles. I want to move onto working on managing states more efficiently and at scale. Most likely, this will involve picking up a state manager such as Redux.")))))}}]),t}(i.Component),_=a(26),x=a.n(_),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={groceries:[{name:"Olive Oil",category:"Oils",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"olive-oil-968657_1920.jpg",image_source:"Pixabay",uuid:"398f30ac-8b0c-40da-a04a-2dd9a0e8164d",stock:65,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Tangerines",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tangerines-1721590_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"4e307ef5-ffa6-43ff-ad48-c7b913db43d8",stock:95,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Bread Loaf",category:"Baked Goods",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"bread-1281053_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"3828ee56-702f-44eb-9a98-9f16c6c126f8",stock:197,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Blueberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"blueberries-2270379_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"d21979ec-eaa3-4d89-a778-86175a62b6eb",stock:248,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Sausage",category:"Meat",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"grill-sausage-4249707_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"1c90d1ae-dc18-4346-9cf1-9c40e2f6d475",stock:88,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Tomatoes",category:"Vegetables",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"tomatoes-1280859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"9f7e8c7c-1aa6-43c7-9f22-76e85dff3adb",stock:128,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Oranges",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"oranges-2100108_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"3d540c90-a43c-4ed2-be98-aab932048835",stock:130,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Raspberries",category:"Fruit",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",image_name:"raspberries-1426859_640.jpg",image_source:"Pixabay",weight_grams:1e3,uuid:"d906a13c-4a05-470b-860f-d0fcd1c8f0cf",stock:257,last_updated:"2019-06-06T04:46:16.540Z"},{name:"Potatoes",category:"Vegetables",image_name:"potatoes-1585060_640.jpg",image_source:"Pixabay",uuid:"57a5068e-48d6-4993-a0ad-872a1ecadc1b",stock:66,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Apricots",category:"Fruit",image_name:"apricots-2523272_640.jpg",image_source:"Pixabay",uuid:"de874a65-a8e1-4906-9274-5f27dbd9a4c2",stock:123,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur.",last_updated:"2019-06-06T04:46:16.540Z"},{name:"Blackberries",category:"Fruit",image_name:"blackberries-1539540_640.jpg",image_source:"Pixabay",uuid:"38358988-54d9-4569-8ccb-265a9b599aa3",stock:231,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Steak",category:"Meat",image_name:"meat-3139641_640.jpg",image_source:"Pixabay",uuid:"bfc2e48d-7d6e-49c6-8f98-13acc335abcc",stock:175,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Black Forest Ham",category:"Meat",image_name:"black-forest-ham-2278383_640.jpg",image_source:"Pixabay",uuid:"d47550a1-6b7c-4a8c-8a96-ef73bb125caa",stock:93,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Walnuts",category:"Nuts",image_name:"walnut-1739021_640.jpg",image_source:"Pixabay",uuid:"85b79c92-415d-4e79-a337-1d29f0be0cd2",stock:101,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Almonds",category:"Nuts",image_name:"almonds-1768792_640.jpg",image_source:"Pixabay",uuid:"8def70ed-bf25-4748-98f2-c3ddf5bc0428",stock:64,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Shish Kebab",category:"Meat",last_updated:"2019-06-06T04:46:16.540Z",image_name:"shish-kebab-417994_640.jpg",image_source:"Pixabay",uuid:"f681c3f5-7f8c-4404-96bb-2a5b2ea76bbf",stock:235,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Grapes",category:"Fruit",last_updated:"2019-06-06T04:46:16.540Z",image_name:"grapes-276070_640.jpg",image_source:"Pixabay",uuid:"07271f7f-924d-40cd-8046-b3a49258c3fd",stock:219,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Plums",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"plums-3641844_640.jpg",image_source:"Pixabay",uuid:"64e1986c-d0d2-451c-8775-af9b6bc69532",stock:59,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Minced Beef",last_updated:"2019-06-06T04:46:16.540Z",category:"Meat",image_name:"minced-meat-1747910_640.jpg",image_source:"Pixabay",uuid:"05ecf213-c359-476b-9f10-ac9a39430d5a",stock:210,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Garlic",last_updated:"2019-06-06T04:46:16.540Z",category:"Vegetable",image_name:"garlic-84691_640.jpg",image_source:"Pixabay",uuid:"22347449-313f-4669-a187-5624c331ac56",stock:293,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Strawberries",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"strawberries-1330459_640.jpg",image_source:"Pixabay",uuid:"a2d13cfe-aca2-4de0-ae87-6f3b5df2f8f6",stock:161,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Peach",last_updated:"2019-06-06T04:46:16.540Z",category:"Fruit",image_name:"peach-2573836_640.jpg",image_source:"Pixabay",uuid:"c69837e5-ad48-4300-8f15-8c34281bd56f",stock:176,description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Peas",category:"Vegetables",image_name:"pea-1205673_640.jpg",image_source:"Pixabay",uuid:"32954c41-262b-47b0-8f38-174f76b24f18",stock:59,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."},{name:"Pear",category:"Fruit",image_name:"fruit-1534494_640.jpg",image_source:"Pixabay",uuid:"66751410-181a-4692-a728-ebb172390ec2",stock:178,last_updated:"2019-06-06T04:46:16.540Z",description:"Dolore consectetur nostrud fugiat tempor veniam do ut et. Fugiat adipisicing duis laboris irure veniam sint minim dolor excepteur quis et commodo Lorem. Consequat laboris cillum in velit sint. Minim dolor duis anim fugiat dolor voluptate excepteur pariatur."}]},a.deleteGrocery=function(e){a.setState({groceries:Object(s.a)(a.state.groceries.filter(function(t){return t.uuid!==e}))})},a.modifyStock=function(e,t){a.setState({groceries:a.state.groceries.map(function(a){if(e===a.uuid){var i=a.stock+t;i>=0?a.stock=i:alert("No more stock available, you cannot purchase this item")}return a})})},a.addGrocery=function(e){e.preventDefault();var t=(new Date).toJSON(),i={uuid:x.a.v4(),description:e.target.description.value,last_updated:t,name:e.target.name.value,category:e.target.category.value,stock:0};a.setState({groceries:[].concat(Object(s.a)(a.state.groceries),[i])}),alert("You've successfully added a new grocery ".concat(e.target.name.value))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{addGrocery:e.addGrocery}),r.a.createElement(f,{modifyStock:e.modifyStock,deleteGrocery:e.deleteGrocery,data:e.state.groceries}))}}),r.a.createElement(g.a,{exact:!0,path:"/about",component:E}),r.a.createElement(y,null)))}}]),t}(i.Component);n.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.39b9a860.chunk.js.map