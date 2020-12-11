import React, { Component } from 'react';
import { Col, Card, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import TUTORIALS_QUERY from '../all-tutorials/index';
import Tutorial from '../Tutorial';

class TutBox extends Component {
    render() {
        return (
          <Query query={TUTORIALS_QUERY}>
           {({ loading, error, data }) => {

              if (loading) return <div>Fetching tutorials.....</div>
              if (error)   return <div>Error fetching tutorials</div>

              const items = data.tutorials;
              return (
                <React.Fragment>
                  { items.map((item, key) =>
                      <Col lg="4" md="6" className="mt-4 pt-2" key={item.key} name="tutorial">
                          <Card className="blog rounded border-0 shadow">
                              <div className="position-relative">
                                  <CardImg top src={item.image.url} className="rounded-top" alt=""/>
                                  <div className="overlay rounded-top bg-dark"></div>
                              </div>
                              <CardBody className="content">
                                  <h5><Link to="/page-tutorial-detail" className="card-title title text-dark">{item.title}</Link></h5>
                                  <p className="para-desc text-muted">{item.description}</p>
                                  <div className="post-meta d-flex justify-content-between mt-3">
                                      <ul className="list-unstyled mb-0">
                                          <li className="list-inline-item mr-2  mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{item.likes}</Link></li>
                                          <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1 ml-1"></i>{item.comments}</Link></li>
                                      </ul>
                                      <Link to="/page-tutorial-detail" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                  </div>
                              </CardBody>
                              <div className="author">
                                  <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {item.dateAndTime}</small>
                              </div>
                          </Card>
                        </Col>
                      )
                    }
                  </React.Fragment>

                  )
                }}
              </Query>
          );
        }
    }

export default TutBox;
