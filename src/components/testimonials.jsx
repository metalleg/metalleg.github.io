import React, { Component } from "react";

export class Testimonials extends Component {
  render() {
    return (
      <div id="testimonials" data-section="testimonials">
				<section className="colorlib-work" data-section="testimonials">
					<div className="colorlib-narrow-content">
  						<div className="row">
  							<div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
  								<h2 className="colorlib-heading animate-box">My Clients Like Me</h2>
  							</div>
  						</div>
            <div className="row">
              {this.props.data
                ? this.props.data.map((t, i) => (
                    <div key={`${t.name}-${i}`} className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                      <div className="testimonial">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="testimonial-image">
                              {" "}
                              <img src={t.img} alt="" />{" "}
                            </div>
                          </div>
                          <div className="col-md-10 testimonial-content">
                            <p>"{t.text}"</p>
                            <p className="testimonial-meta"> - {t.name}, <a href={t.link} target="_blank"> {t.company} </a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
        </div>
          </section>
      </div>
    );
  }
}

export default Testimonials;
