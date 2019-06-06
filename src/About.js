import React, { Component } from 'react'

export default class About extends Component {

    spanStyle = {
        fontFamily:'monospace',
        color: '#209cee'
    }

    render() {
        return (
<React.Fragment>
<section className="section">
<section className="container">
<section className="content">
<h3>About Page</h3>
<p>This application was developed soon after learning some of the important core React skills from online tutorials/documentation. I chose to build an app revolving around grocery items, because they're relatable and have many properties which can be updated through React. This application deals with the front-end only and does not make any calls to external or internal REST APIs.</p>
<p>Throughout the development of the Grocery App I managed to cover the following core areas of React</p>
<ul>
<li>Creating and working with boiler plate React code with <span style={this.spanStyle}>create-react-app</span></li>
<li>Creating and referencing <span style={this.spanStyle}>React.Components</span></li>
<li>Dynamic routing with <span style={this.spanStyle}>react-router-dom</span></li>
<li>Managing and updating the component level <span style={this.spanStyle}>state</span></li>
<li>Working with forms</li>
<li>Conditional styles and classes</li>
<li>Deployment to <span style={this.spanStyle}>gh-pages</span></li>
</ul>
<h3>Next Steps</h3>
<p>After becoming more familiar with the core React principles. I want to move onto working on managing states more efficiently and at scale. Most likely, this will involve picking up a state manager such as Redux.</p>

</section>
</section>
</section>

</React.Fragment>
        )
    }
}
