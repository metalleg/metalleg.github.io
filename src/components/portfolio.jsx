import React, { Component, useState, useEffect } from "react";

const postsPerPage = 2;
let arrayForHoldingPosts = [];

const App = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(2);

  const loopWithSlice = (start, end) => {
    const slicedPosts = this.props.data.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

};

export default class Projects extends Component {

  render() {
    return (
      <div id="projects">
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
                <p className="show-mobile">
                  Tap for more info!
                </p>
							</div>
						</div>

      			<div className="row">
              {this.props.data ? this.props.data.map((p,i) => (

                <div key={`${p.title}-${i}`} className="col-md-6 port-item animate-box" data-animate-effect="fadeInLeft">
        					<div className={`project project-${ p.class }`}>
        						<div className="desc">
        							<div className="con">
        								<h3>{p.title}</h3>
        								<span>{p.text}</span>
                        <a className="portfolio-link" href={p.link} target="_blank">Check It Out</a>
                        <span>{p.img}</span>
        							</div>
        						</div>
        					</div>
        				</div>
                )) : "Loading..." }

      			</div>

						{/*<div className="row">
  							<div className="col-md-12 animate-box">
  								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
  							</div>
						</div>*/}

					</div>
				</section>
      </div>
    )
  }
}
