// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Star Rating
import StarRatings from 'react-star-ratings';

import {
    Carousel,
    CarouselItem,
    CarouselControl
} from "reactstrap";

//Import Images
import portfolioHeader from '../../../assets/images/personal/portfolio-header.jpg';

class PortfolioHeader extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeIndex : 0
        }
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.clients.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex : nextIndex });
      }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.clients.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex : nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex : newIndex });
    }

    render() {
        return (
            <React.Fragment>

                <section className="section" style={{ background: `url(${portfolioHeader}) center center`, backgroundSize: `cover`}}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="7" className="text-center">
                              <h1 class="title">PORTFOLIO</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default PortfolioHeader;
