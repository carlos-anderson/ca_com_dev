import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, Media } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Light box
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import components
import PortfolioHeader from "../../../components/Layout/PortfolioHeader";

//Import Images
import work1 from "../../../assets/images/work/1.jpg";
import work2 from "../../../assets/images/work/2.jpg";
import work3 from "../../../assets/images/work/3.jpg";
import work4 from "../../../assets/images/work/4.jpg";
import work5 from "../../../assets/images/work/5.jpg";
import work6 from "../../../assets/images/work/6.jpg";

const images = [
    work1, work2, work3, work4, work5, work6
];

class PortfolioItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            pathItems : [
                //id must required
                { id : 1, name : "Landrick", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Work", link : "#" },
                { id : 4, name : "Grid" },
            ],
            works : [
                { image : work1, title : "Iphone mockup", subtitle : "Branding", category : "Branding" },
                { image : work2, title : "Mockup Collection", subtitle : "Mockup", category : "Designing" },
                { image : work3, title : "Abstract images", subtitle : "Abstract", category : "Photography" },
                { image : work4, title : "Yellow bg with Books", subtitle : "Company V-card", category : "Development" },
                { image : work5, title : "Company V-card", subtitle : "V-card", category : "Branding" },
                { image : work6, title : "Mockup box with paints", subtitle : "Photography", category : "Branding" },
            ],
            photoIndex: 0,
            isOpen: false,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
          <React.Fragment>

            <section className="section">
                <PortfolioHeader />
            </section>
              <Container>

                  <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                      <div className="section-title mb-4 pb-2">
                        <h4 className="title mb-4"><span className="text-primary">Case Studies</span></h4>
                      </div>
                    </Col>
                  </Row>

                  <Row className="projects-wrapper">

                      {
                          this.state.works.map((work, key) =>
                              <Col key={work.key} lg={4} md={6} xs={12} className="mb-4 pb-2 branding">
                                  <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                                      <CardBody className="p-0">
                                          <Link className="mfp-image d-inline-block" to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} title="">
                                              <img src={work.image} className="img-fluid" alt="work"/>
                                          </Link>
                                          <div className="content bg-white p-3">
                                              <h5 className="mb-0"><Link to="page-portfolio-detail" className="text-dark title">{work.title}</Link></h5>
                                              <h6 className="text-muted tag mb-0">{work.subtitle}</h6>
                                          </div>
                                      </CardBody>
                                  </Card>
                              </Col>
                          )
                      }

                      {/* lightbox for portfolio images */}
                      { isOpen && (
                                      <Lightbox
                                          mainSrc={images[photoIndex]}
                                          nextSrc={images[(photoIndex + 1) % images.length]}
                                          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                          imagePadding={100}
                                          onCloseRequest={() => this.setState({ isOpen: false })}
                                          onMovePrevRequest={() =>
                                          this.setState({
                                              photoIndex: (photoIndex + images.length - 1) % images.length,
                                          })
                                          }
                                          onMoveNextRequest={() =>
                                          this.setState({
                                              photoIndex: (photoIndex + 1) % images.length,
                                          })
                                          }
                                      />
                      ) }

                  </Row>

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

              </Container>

            </React.Fragment>
        );
    }
}

export default PortfolioItemDetail;
