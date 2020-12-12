import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Intro from './components/intro'
import About from './components/about'
import Portfolio from './components/portfolio'
import Testimonials from './components/testimonials'
import Timeline from './components/timeline'
import Contact from './components/contact'
import Footer from './components/footer'

import { skills, projects, testimonials, contact } from './data/data';

class App extends Component {

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar data={contact}/>
  				<div id="colorlib-main">
  					<Intro />
  					<About data={skills}/>
            <Portfolio data={projects} />
            <Testimonials data={testimonials} />
            <Contact data={contact} />
            <Footer />
        	</div>
      	</div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
