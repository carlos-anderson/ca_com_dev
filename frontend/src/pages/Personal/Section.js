import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

import ScrollspyNav from '../../components/Layout/ScrollspyNav';

import bg01 from '../../assets/images/personal/bg01.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home rtl-personal-hero bg-light d-flex align-items-center" style={{ background: `url(${bg01}) center center`}} id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg="8" md="9" >
                                        <div className="title-heading mt-4">
                                            <h1 className="display-3 font-weight-bold mb-3">Discover<br />
                                                <Typist>
                                                    <span className="element">Carlos Anderson</span>
                                                    <Typist.Backspace count={25} delay={750} />
                                                    <span className="element">UI/UX Design</span>
                                                    <Typist.Backspace count={25} delay={750} />
                                                    <span className="element">Practical Coding</span>
                                                </Typist>
                                            </h1>
                                            <p className="para-desc text-muted">I am a Front End Developer with 15+ years of experience designing and developing interactive websites and applications. Practical Coding skills are essential in the modern digital landscape. My goal is to provide you with hands-on coding tutorials that increase your understanding of popular programming languages like HTML, CSS and Javascript. </p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#about" className="btn btn-primary">Let's Get Started <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
