import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody, CardImg } from 'reactstrap';
import { Link } from "react-router-dom";

import { Query } from 'react-apollo';
import TUTORIALS_QUERY from '../../../components/all-tutorials/index';
import Tutorial from '../../../components/Tutorial';

import TutBox from "../../../components/Shared/TutBox";

// import images
import uiDesign01 from '../../../assets/images/personal/blog/ui-design-01.jpg';
import responsiveDesign01 from '../../../assets/images/personal/blog/responsive-design-01.jpg';
import socialMedia01 from '../../../assets/images/personal/blog/social-media-01.jpg';
import hashtag01 from '../../../assets/images/personal/blog/hashtag-01.jpg';
import reactJS01 from '../../../assets/images/personal/blog/react-js-01.jpg';
import electronReactNode01 from '../../../assets/images/personal/blog/electron-react-node-01.jpg';

class TutorialListShort extends Component {
    constructor(props) {
      super(props);
      this.state={
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
            <Row>
              {/* tutorial box */}
              <TutBox />
              <Col xs="12" className="mt-4 pt-2">
                  <Link to="page-tutorials-sidebar" className="btn btn-primary ">See More <i className="mdi mdi-chevron-right"></i></Link>
              </Col>
            </Row>
      );
    }
}

export default TutorialListShort;
