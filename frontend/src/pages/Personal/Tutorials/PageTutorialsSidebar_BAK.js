// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';

import { Query } from 'react-apollo';
import TUTORIALS_QUERY from '../../../components/all-tutorials/index';
import Tutorial from '../../../components/Tutorial';

import PageSearchSidebar from './Search/PageSearchSidebar';
import TutorialsHeader from "./TutorialsHeader";

import blog01 from '../../../assets/images/personal/blog/01.jpg';
import blog07 from '../../../assets/images/personal/blog/07.jpg';
import blog08 from '../../../assets/images/personal/blog/08.jpg';

class PageTutorialsSidebar extends Component {

    componentDidMount() {

    }

    render() {

        return (
          <Query query={TUTORIALS_QUERY}>
           {({ loading, error, data }) => {

              if (loading) return <div>Fetching tutorials.....</div>
              if (error)   return <div>Error fetching tutorials</div>

              const items = data.tutorials;

              for(let i = 0, l = items.length; i < l; i++) {

                  var tutList = items[i];

                  console.log(tutList);
              }

              return (
                  <React.Fragment>

                      <section className="section">
                          <TutorialsHeader />
                      </section>

                        <Container>

                          <Row className="justify-content-center">
                            <Col xs={12} className="text-center">
                              <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4"><span className="text-primary">Full Stack Design and Development</span></h4>
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={8} md={6}>
                              <Row>
                                {
                                  items.map((item, key) =>
                                    <Col lg={6} md={12} key={item.id} className="mb-4 pb-2">
                                      <Card className="blog rounded border-0 shadow">
                                        <div className="position-relative">
                                          <CardImg top src={item.image.url} className="rounded-top" alt=""/>
                                          <div className="overlay rounded-top bg-dark"></div>
                                        </div>
                                      <CardBody className="content">
                                        <h5><Link to="/:tutorial_id" className="card-title title text-dark">{item.title}</Link></h5>
                                        <div className="post-meta d-flex justify-content-between mt-3">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2  mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{item.like}</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1 ml-1"></i>{item.comment}</Link></li>
                                            </ul>
                                            <Link to="/:tutorial_id" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                          </div>
                                          </CardBody>
                                      </Card>
                                    </Col>
                                  )
                                }

                                <Col xs="12">
                                  <Pagination listClassName="justify-content-center mb-0">
                                    <PaginationItem><PaginationLink to="#" previous>Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink to="#" next>Next</PaginationLink></PaginationItem>
                                  </Pagination>
                                </Col>
                              </Row>
                            </Col>

                            {/* sidebar */}
                            <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <PageSearchSidebar blog01={blog01} blog07={blog07} blog08={blog08} />
                            </Col>
                          </Row>
                        </Container>

                      <section className="section">
                        <Row className="justify-content-center">
                          <Col lg={6} md={6} xs={12}>
                              <Media className="align-items-center shadow rounded p-4 features">
                                  <div className="icons m-0 rounded h2 text-primary text-center px-2">
                                      <i className="uil uil-envelope-check"></i>
                                  </div>
                                  <div className="content ml-4">
                                      <h5 className="mb-1"><Link to="#" className="text-dark">Get in Touch !</Link></h5>
                                      <p className="text-muted mb-0">This is required when, for text is not yet available.</p>
                                      <div className="mt-2">
                                          <Link to="#" className="btn btn-sm btn-soft-primary">Submit a Request</Link>
                                      </div>
                                  </div>
                              </Media>
                          </Col>
                        </Row>
                      </section>

                  </React.Fragment>

                )
              }}

            </Query>
          );

        }
      }

export default PageTutorialsSidebar;
