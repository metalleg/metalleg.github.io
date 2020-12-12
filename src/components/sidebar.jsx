import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(/images/profile-new.png)'}} />
              <h1 id="colorlib-logo">
                <a href="index.html" className="home">Christopher<br/> Kelley</a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Hello</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#testimonials" data-nav-section="testimonials">Testimonials</a></li>
                  <li><a href="#contact" data-nav-section="contact">Get In Touch</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul className="bottom-menu">
                <li><a href="https://www.linkedin.com/in/christopher-kelley-06ab8b24/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href={`mailto:${this.props.data.email}`} className="email"><i className="icon-mail"></i></a></li>
                <li><a href={this.props.data.resume} className="email" target="_blank"><i className="icon-download4"/></a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
