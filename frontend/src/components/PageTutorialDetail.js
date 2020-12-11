// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input, Card, CardBody, CardImg } from 'reactstrap';

import { Query } from 'react-apollo';
import TUTORIALS_QUERY from './all-tutorials/index';
import Tutorial from './Tutorial';

import PageSearchSidebar from './PageSearchSidebar';
import TutorialDetailHeader from './Layout/TutorialDetailHeader';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Comments Box
import CommentsBox from "./Shared/CommentsBox";

// import images
import tutorialsHeader from '../assets/images/personal/tutorials-header.jpg';

import blog01 from '../assets/images/blog/01.jpg';
import blog03 from '../assets/images/blog/03.jpg';
import blog04 from '../assets/images/blog/04.jpg';
import blog07 from '../assets/images/blog/07.jpg';
import blog08 from '../assets/images/blog/08.jpg';

// Client Images
import client1 from '../assets/images/client/01.jpg';
import client2 from '../assets/images/client/02.jpg';
import client3 from '../assets/images/client/03.jpg';
import client4 from '../assets/images/client/04.jpg';


class PageTutorialDetail extends Component {
  constructor(props) {
    super(props);
      this.state = {
        id: null,
        comments : [
            { id : 1, image: client1, name : "Lorenzo Peterson", date : "15th August, 2019", time : "01:25 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
            { id : 2, image: client2, name : "Tammy Camacho", date : "16th August, 2019", time : "02:05 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
            { id : 3, image: client3, name : "Tammy Camacho", date : "17th August, 2019", time : "04:03 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                replies : [
                    { id : 1, image: client4, name : "Calvin Camacho", date : "18th August, 2019", time : "05:55 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                ]
            },
        ],
        blogs : [
            { id : 11, image : blog03, title : "Smartest Applications for Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            { id : 12, image : blog04, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
        ],
        successMsg : false
      }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }
    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <section className="section">
              <section className="section" style={{ background: `url(${tutorialsHeader}) center center`, backgroundSize: `cover`}}>
                  <div className="bg-overlay"></div>
                  <Container>
                      <Row className="justify-content-center">
                          <Col lg="7" className="text-center">
                            <h1 className="title">{tutList[i].title}</h1>
                          </Col>
                      </Row>
                  </Container>
                </section>

                <Container>
                    <div className="content card-body">
                      <Row className="justify-content-center">
                          <Col lg="7" className="text-center">
                            <p className="text-muted">Posted by: Carlos Anderson - July 28, 2020</p>
                          </Col>
                      </Row>
                    </div>

                    <Row>
                        <Col lg="8" md="6">
                            <Card className="blog blog-detail border-0 shadow rounded">
                                <img src={blog01} className="img-fluid rounded-top" alt=""/>
                                <CardBody className="content">
                                    <h6><i className="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" className="text-primary">Software</a>, <a href="javscript:void(0)" className="text-primary">Application</a></h6>
                                    <p className="text-muted mt-3">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. </p>
                                    <blockquote className="blockquote mt-3 p-3">
                                        <p className="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                    </blockquote>
                                    <p className="text-muted">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                    <div className="post-meta mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>

                            {/* comments */}
                            <CommentsBox comments={this.state.comments} />

                            <Card className="shadow rounded border-0 mt-4">
                                <CardBody>
                                <h5 className="card-title mb-0">Related Posts :</h5>

                                <Row>
                                {
                                    this.state.blogs.map((blog, key) =>
                                        <Col lg="6" className="mt-4 pt-2" key={blog.id} name="blog">
                                            <Card className="blog rounded border-0 shadow">
                                                <div className="position-relative">
                                                    <CardImg top src={blog.image} className="rounded-top" alt=""/>
                                                    <div className="overlay rounded-top bg-dark"></div>
                                                </div>
                                                <CardBody className="content">
                                                    <h5><Link to="/page-tutorial-detail" className="card-title title text-dark">{blog.title}</Link></h5>
                                                    <div className="post-meta d-flex justify-content-between mt-3">
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="list-inline-item mr-2  mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.like}</Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1 ml-1"></i>{blog.comment}</Link></li>
                                                        </ul>
                                                        <Link to="/page-tutorial-detail" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                    </div>
                                                </CardBody>
                                                <div className="author">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                </div>
                                            </Card>
                                        </Col>
                                    )
                                }
                                </Row>
                                </CardBody>
                            </Card>

                            <Card className="shadow rounded border-0 mt-4">
                                <CardBody>
                                <h5 className="card-title mb-0">Leave A Comment :</h5>
                                <Alert color="primary" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                    Data sended successfully.
                                </Alert>
                                <Form onSubmit={this.handleSubmit} className="mt-3">
                                    <Row>
                                        <Col md="12">
                                            <FormGroup className="position-relative">
                                                <Label>Your Comment</Label>
                                                <i><FeatherIcon icon="message-circle" className="fea icon-sm icons" /></i>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control pl-5" required></textarea>
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Name <span className="text-danger">*</span></Label>
                                                <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                                <Input id="name" name="name" type="text" placeholder="Name" className="form-control pl-5" required/>
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Your Email <span className="text-danger">*</span></Label>
                                                <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                                <Input id="email" type="email" placeholder="Email" name="email" className="form-control pl-5" required/>
                                            </FormGroup>
                                        </Col>

                                        <Col md="12">
                                            <div className="send">
                                            <Button type="submit" className="btn btn-primary w-100">Send Message</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                                </CardBody>
                            </Card>
                        </Col>

                    {/* sidebar */}
                    <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <PageSearchSidebar blog01={blog01} blog07={blog07} blog08={blog08} />
                    </Col>

                    </Row>
                </Container>
              </section>
        );
    }
}
export default PageTutorialDetail;
