// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import creditScore from '../../assets/images/personal/credit-score.png';
import joinTeam from '../../assets/images/software/bg.png';

//Import Components
import SectionTitleLeft from "../../components/Shared/SectionTitleLeft";

class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                {title : "Digital Marketing Solutions for Tomorrow" },
                {title : "Create your own skin to match your brand" }
            ],
            features2 : [
                {title : "Digital Marketing Solutions for Tomorrow" },
                {title : "Create your own skin to match your brand" }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={creditScore} className="img-fluid shadow rounded" alt="" />
                            </Col>

                            <Col lg={6} md={6}  className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title="Great Product Analytics With Real Problem"
                                        desc="Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact."
                                        features={this.state.features}
                                        class = ""
                                      />

                                      <a href="#" className="btn btn-primary mt-2 mr-2 mouse-down">
                                          <i className="mdi mdi-wrench" style={{ fontSize: 20 }}></i> Let's Get Started
                                      </a>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                <SectionTitleLeft
                                  title="Get Notified About Importent Email"
                                  desc="This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic."
                                  features={this.state.features2}
                                  class = ""
                                />

                                <a href="#" className="btn btn-primary mt-2 mr-2 mouse-down">
                                    <i className="mdi mdi-handshake" style={{ fontSize: 20 }}></i> Join My Team!
                                </a>

                                </div>
                            </Col>

                            <Col lg="6" md={{size:6,order:2}} xs={{order:1}}>
                                <img src={joinTeam} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default Start;
