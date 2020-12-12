import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
              <div className="row">
              <div className="col-md-12">
                  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                      <div className="about-desc">
                      {/*<span className="heading-meta">About Me</span>*/}
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a project manager turned <strong>front-end developer and designer</strong>. I'm people-focused and usability oriented. <br/><strong>I love solving problems</strong>.
                      </p>
                      <p>
                        I didn't get my start in web design, and because of this I'm more people-focused than your average dev. Content and design should revolve around your audience, and they should be laid out so they're as easy to understand as possible. If that's what you want, I'm your man.
                      </p>
                      <p>
                        I run my own business, <a href="https://www.kelsiekconsulting.com/" target="_blank">Kelsiek Consulting</a> but I'm up for <a href="#contact" data-nav-section="contact">hire</a> as well!
                      </p>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </div>
          <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading">My Skills</h2>
                </div>
              </div>
              <div className="row row-pt-md">

                {this.props.data ? this.props.data.map((s,i) => (

                <div key={`${s.title}-${i}`} className="col-lg-4 col-md-6 text-center animate-box">
                    <div className="services color-1">
                      <span className="icon">
                          <i className={`icon-${s.icon}`} />
                      </span>
                      <div className="desc">
                          <h3>{s.title}</h3>
                          <p>{s.text}</p>
                          <p>I use: {s.tools}</p>
                      </div>
                    </div>
                </div>
                  )) : "Loading..." }
              </div>
          </div>
        </section>
      </div>
    )
  }
}
