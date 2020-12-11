import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import components
import PageSearchSidebar from "../../../components/Shared/PageSearchSidebar";

// import images
import uiDesign01 from '../../../assets/images/personal/blog/ui-design-01.jpg';
import responsiveDesign01 from '../../../assets/images/personal/blog/responsive-design-01.jpg';
import socialMedia01 from '../../../assets/images/personal/blog/social-media-01.jpg';
import hashtag01 from '../../../assets/images/personal/blog/hashtag-01.jpg';
import reactJS01 from '../../../assets/images/personal/blog/react-js-01.jpg';
import electronReactNode01 from '../../../assets/images/personal/blog/electron-react-node-01.jpg';

import blog01 from '../../../assets/images/personal/blog/01.jpg';
import blog07 from '../../../assets/images/personal/blog/07.jpg';
import blog08 from '../../../assets/images/personal/blog/08.jpg';

class TutorialListSidebar extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogs : [
                { id : 1, image : uiDesign01, title : "10 Rules of Thumb for Intuitive User Interface Design", desc : "Learn fundamental design consistency and standards and why they’re essential", like : "33", comment : "08", autor : "Carlos Anderson", date : "February 13, 2020" },
                { id : 2, image : responsiveDesign01, title : "Responsive Design and Optimizing Web Apps for Mobile Users", desc : "Most mobile users expect websites to load within 4 seconds, don't keep them waiting", like : "33", comment : "08", autor : "Carlos Anderson", date : "March 3, 2020" },
                { id : 3, image : socialMedia01, title : "A Dozen Awesome Social Media Hacks for Future Top Influencers", desc : "Do you want more influence in your field, but don't know where to begin?", like : "33", comment : "08", autor : "Carlos Anderson", date : "March 27, 2020" },
                { id : 4, image : hashtag01, title : "Hastags, Keywords, Descriptions and SEO: What's the big deal?", desc : "These are tools that help increase your online visibility and search engine rankings", like : "33", comment : "08", autor : "Carlos Anderson", date : "April 10, 2020" },
                { id : 5, image : reactJS01, title : "Let's Get to Know the React Javascript Libray - Novice Tips", desc : "Build modern user interfaces with this powerful open-source library", like : "33", comment : "08", autor : "Carlos Anderson", date : "May 17, 2020" },
                { id : 6, image : reactJS01, title : "Let's Get to Know the React Javascript Libray - Advanced Tips", desc : "Step up your React game...Let's build a responsive web app from scratch", like : "33", comment : "08", autor : "Carlos Anderson", date : "June 30, 2020" },
                { id : 7, image : electronReactNode01, title : "Build Windows, iOS and Android Apps With React + Electron + NodeJS", desc : "Now you're ballin'...Time to go pro and develop native apps with JSX", like : "33", comment : "08", autor : "Carlos Anderson", date : "July 6, 2020" },
            ]
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
    }

    render() {
        return (
            <React.Fragment>
            <Container>
                <Row>
                    <Col lg={8} xs={12}>
                        <Row>
                            {
                                this.state.blogs.map((blog, key) =>
                                    key% 2 === 0 ?
                                    <Col key={key} xs={12} className="mb-4 pb-2">
                                        <Card className="blog rounded border-0 shadow overflow-hidden">
                                            <Row className="align-items-center no-gutters">
                                                <Col md={6}>
                                                    <img src={blog.image} className="img-fluid" alt="Carlos Anderson" />
                                                    <div className="overlay bg-dark"></div>
                                                    <div className="author">
                                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                    </div>
                                                </Col>

                                                <Col md={6}>
                                                    <CardBody className="content">
                                                        <h5><Link to="#" className="card-title title text-dark">{blog.title}</Link></h5>
                                                        <p className="text-muted mb-0">{blog.desc}</p>
                                                        <div className="post-meta d-flex justify-content-between mt-3">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="list-inline-item mr-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.like}</Link></li>
                                                                <li className="list-inline-item ml-1"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.comment}</Link></li>
                                                            </ul>
                                                            <Link to="page-blog-detail" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                        </div>
                                                    </CardBody>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    :
                                    <Col key={key} xs={12} className="mb-4 pb-2">
                                        <Card className="blog rounded border-0 shadow overflow-hidden">
                                            <Row className="align-items-center no-gutters">
                                                <Col md={{size:6, order:1}} xs={{order:2}} >
                                                    <CardBody className="content">
                                                        <h5><Link to="#" className="card-title title text-dark">{blog.title}</Link></h5>
                                                        <p className="text-muted mb-0">{blog.desc}</p>
                                                        <div className="post-meta d-flex justify-content-between mt-3">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="list-inline-item mr-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.like}</Link></li>
                                                                <li className="list-inline-item ml-1"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.comment}</Link></li>
                                                            </ul>
                                                            <Link to="page-blog-detail" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                        </div>
                                                    </CardBody>
                                                </Col>

                                                <Col md={{size:6, order:2}} xs={{order:1}}>
                                                    <img src={blog.image} className="img-fluid" alt="Landrick" />
                                                    <div className="overlay bg-dark"></div>
                                                    <div className="author">
                                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            }

                            <Col xs={12}>
                                <Pagination listClassName="justify-content-center mb-0">
                                    <PaginationItem><PaginationLink href="#" aria-label="Previous">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#" aria-label="Next">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </Col>

                        </Row>
                    </Col>

                    {/* sidebar */}
                    <Col lg={4} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <PageSearchSidebar blog01={blog01} blog07={blog07} blog08={blog08} />
                    </Col>
                    {/* <!-- END SIDEBAR --> */}

                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default TutorialListSidebar;
