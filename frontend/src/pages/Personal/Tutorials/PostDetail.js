// React Basic and Bootstrap
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';

//Import Images
import tutorialsHeader from '../../../assets/images/personal/tutorials-header.jpg';

import PageSearchSidebar from './Search/PageSearchSidebar';

const Topbar = React.lazy(() => import('../../../components/Layout/Topbar'));

export default function Post(props) {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await Axios.get(
      `http://localhost:5000/posts/${props.match.params.id}`
    );
    setPost(response.data);
  }

  useEffect(() => {
    getPost();
  });

    return (
      <React.Fragment>

        <section>
          <Topbar />
        </section>

        <section className="section" style={{ background: `url(${tutorialsHeader}) center center`, backgroundSize: `cover`}}>
            <div className="bg-overlay"></div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="7" className="text-center">
                      <h1 className="title">{post.title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>

      </React.Fragment>
    );
}
