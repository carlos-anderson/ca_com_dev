// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Images
import tutorialsHeader from '../../../assets/images/personal/tutorials-header.jpg';

class TutorialDetailHeader extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="section" style={{ background: `url(${tutorialsHeader}) center center`, backgroundSize: `cover`}}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="7" className="text-center">
                              <h1 className="title">Tutorial Title</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default TutorialDetailHeader;
