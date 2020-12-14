import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullwidth">
          <div className="author-img chris-img" style={{backgroundImage: 'url(images/profile.jpg)'}} />
            <div className="menu-left">
              <h1 id="colorlib-logo"><a href="index.html">Christopher Kelley</a></h1>
              <a className="email" href="mailto:christopher@kelsiekconsulting.com"><i className="icon-mail"></i> christopher@kelsiekconsulting.com</a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar menu-right">
              <div id="navbar" className="collapse">
                <ul className="main-menu">
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">My Work</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="https://www.linkedin.com/in/christopher-kelley-06ab8b24/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
