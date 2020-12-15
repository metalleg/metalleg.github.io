import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
              <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="col-md-12">
                          <div className="contact-desc">
                            <h2 className="colorlib-heading">Let's Work Together</h2>
                            <table className="contact-list">
                              <tr>
                                <td colspan="2">I'm available for contract and hire!</td>
                              </tr>
                              <tr>
                                <td className="first">
                                  Phone:
                                </td>
                                <td>
                                  <a href={`tel:${this.props.data.phone}`}><i className="icon-phone"></i> {this.props.data.phone}</a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Email:
                                </td>
                                <td className="email">
                                  <a href={`mailto:${this.props.data.email}`}><i className="icon-mail"></i> {this.props.data.email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Resume:
                                </td>
                                <td>
                                  <a href={this.props.data.resume} target="_blank"><i className="icon-file"></i> Per 2020</a>
                                </td>
                              </tr>
                            </table>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </section>
            </div>
          )
        }
      }
