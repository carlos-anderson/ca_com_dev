// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, Label, Card, CardBody } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

// Import Generic components
import Section from "./Section";
import About from './About';
import Testi from './Testi';
import Blog from './Blog';
import Feature from '../../components/Shared/Feature';
import Start from './Start';
import Client from './Client';
//import TutorialListShort from './Tutorials/TutorialListShort'

//Import Images
import img1 from "../../assets/images/personal/uces-logo-greyscale.png";
import img2 from "../../assets/images/personal/fes-logo-white.png";
import bitcoin from '../../assets/images/icon/bitcoin.svg';
import Email from '../../assets/images/icon/Email.svg';
import location from '../../assets/images/icon/location.svg';
import ether from '../../assets/images/ether.png';

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from 'feather-icons-react';

const Topbar = React.lazy(() => import('../../components/Layout/Topbar'));
const NavbarPage = React.lazy(() => import('../../components/Layout/NavbarPage'));
const FooterWithoutMenuLightSocialOnly = React.lazy(() => import('../../components/Layout/FooterWithoutMenuLightSocialOnly'));

const CustomDot = () => {
  return (
    <i><FeatherIcon icon="arrow-up" className="icons" /></i>
  );
};

class Index extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Contactvisible : false
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.sendMail.bind(this);
      this.callNumber.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }

    componentDidMount() {
      document.body.classList = "";
      window.addEventListener("scroll", this.scrollNavigation, true);

      var featureBox = document.getElementsByClassName("features");
      for(var i=0; i<featureBox.length; i++){
          featureBox[i].classList.remove("mt-5");
      }
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

     sendMail(){
       window.location.href="mailto:contact@example.com";
     }

     callNumber(){
       window.location.href="tel:+152534-468-854";
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
            <React.Fragment>

              <Topbar />

              {/* Hero Start */}
                <Section />

                <section className="section">
                    {/* Tutorial Short List*/}
                    <Row className="justify-content-center">
                      <Col xs={12} className="text-center">
                        <div className="section-title mb-4 pb-2">
                          <h4 className="title mb-4">A few of my  <span className="text-primary">Practical Coding</span> tutorials</h4>
                        </div>
                      </Col>
                    </Row>

                    <Container>
                      <Row className="justify-content-center">
                      </Row>
                    </Container>
                </section>

                {/* Testi */}
                  <Container>
                    <Row className="justify-content-center">
                      <Col xs={12} className="text-center">
                          <div className="section-title mb-4 pb-2">
                              <h4 className="title mb-4">Awesome <span className="text-primary">TESTIMONIALS</span> from satisfied visitors</h4>
                          </div>
                        </Col>
                      </Row>
                  </Container>

                  <Testi />

                  <section className="section">

                    <Container>
                        <Row className="align-items-center">
                            <Col lg={7} md={{size:6, order:2}} xs={{order:1}}>
                                <Card className="border-0">
                                    <CardBody className="p-0">
                                      <h4 className="card-title">Send a note. Questions and comments are welcomed!</h4>
                                      <img src={ether} className="img-fluid" alt="Landrick" />
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                                <Card className="shadow rounded border-0">
                                    <CardBody className="py-5">
                                    <div className="custom-form mt-4">
                                        <div id="message"></div>
                                        <Alert color="primary" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                        <Form method="post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup className="position-relative">
                                                        <Label>Your Name <span className="text-danger">*</span></Label>
                                                        <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                                        <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup className="position-relative">
                                                        <Label>Your Email <span className="text-danger">*</span></Label>
                                                        <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                                        <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup className="position-relative">
                                                        <Label>Subject</Label>
                                                        <i><FeatherIcon icon="book" className="fea icon-sm icons" /></i>
                                                        <Input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={12}>
                                                    <FormGroup className="position-relative">
                                                        <Label>Comments</Label>
                                                        <i><FeatherIcon icon="message-circle" className="fea icon-sm icons" /></i>
                                                        <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12} className="text-center">
                                                    <Input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>
                    </Container>

                    <Container  className="mt-100 mt-60">
                        <Row>
                            <Col md={4}>
                                <Card className="contact-detail text-center border-0">
                                    <CardBody className="p-0">
                                    <div className="icon">
                                        <img src={bitcoin} className="avatar avatar-small" alt=""/>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Phone</h4>
                                        <p className="text-muted">Need help with a complex project? Give me a call for premium support inquiries.</p>
                                        <Link to="#" onClick={this.callNumber} className="text-primary">(949) 929-9867</Link>
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">

                                <Card className="contact-detail text-center border-0">
                                <CardBody className="p-0">
                                    <div className="icon">
                                        <img src={Email} className="avatar avatar-small" alt="Landrick" />
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Email</h4>
                                        <p className="text-muted">Looking for more? Email your suggestions for new topics and tutorials!</p>
                                        <Link to="#" onClick={this.sendMail} className="text-primary">support@carlos-anderson.com</Link>
                                    </div>
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <Card className="contact-detail text-center border-0">
                                <CardBody className="p-0">
                                    <div className="icon">
                                        <img src={location} className="avatar avatar-small" alt="Landrick" />
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Location</h4>
                                        <p className="text-muted">Irvine<br />California, USA</p>
                                        <Link to="#" className="video-play-icon h6 text-primary">View on Google Maps</Link>
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </section>

                <FooterWithoutMenuLightSocialOnly />

                {/* <div className="btn btn-icon btn-soft-primary back-to-top"> */}
                  {/* scrollup button */}
                  <ScrollUpButton ContainerClassName="classForContainer" style={{height:36, width:36}} TransitionClassName="classForTransition">
                  <CustomDot/>
                  </ScrollUpButton>
                {/* </div> */}

            </React.Fragment>
        );
    }

}

export default Index;
