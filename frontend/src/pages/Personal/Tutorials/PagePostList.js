// React Basic and Bootstrap
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';
import PostListItem from './PostListItem';

import PageSearchSidebar from './Search/PageSearchSidebar';
import TutorialsHeader from "./TutorialsHeader";

import uiDesign01 from '../../../assets/images/personal/blog/ui-design-01.jpg';
import responsiveDesign01 from '../../../assets/images/personal/blog/responsive-design-01.jpg';
import socialMedia01 from '../../../assets/images/personal/blog/social-media-01.jpg';
import hashtag01 from '../../../assets/images/personal/blog/hashtag-01.jpg';
import reactJS01 from '../../../assets/images/personal/blog/react-js-01.jpg';
import electronReactNode01 from '../../../assets/images/personal/blog/electron-react-node-01.jpg';

import blog01 from '../../../assets/images/personal/blog/01.jpg';
import blog07 from '../../../assets/images/personal/blog/07.jpg';
import blog08 from '../../../assets/images/personal/blog/08.jpg';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const postRes = await Axios.get("http://localhost:5000/posts/");
    setPosts(postRes.data);
  }

  useEffect(() => {
    getPosts();
  });

  function renderList() {
    return posts.map((post, i) => {
      return (
        <Col lg={6} md={12} key={i} className="mb-4 pb-2">
          <Card className="blog rounded border-0 shadow">
            <div className="position-relative">
              <CardImg top src={electronReactNode01} className="rounded-top" alt=""/>
              <div className="overlay rounded-top bg-dark"></div>
            </div>
          <CardBody className="content">
            <h5><Link to={`/posts/${post._id}`} key={i} className="card-title title text-dark">{post.title}</Link></h5>
            <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                    <li className="list-inline-item mr-2  mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>#</Link></li>
                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1 ml-1"></i>#</Link></li>
                </ul>
                <Link to={`/posts/${post._id}`} className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
              </div>
              </CardBody>
          </Card>
        </Col>
      )
    });
  }

  return (
    <React.Fragment>
      <section className="section">
          <TutorialsHeader />
      </section>

        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4"><span className="text-primary">Full Stack Design and Development</span></h4>
            </div>
          </Col>
        </Row>

      <Container>

        <Row>
          <Col lg={8} md={6}>

          {renderList()}

          </Col>
          {/* sidebar */}
          <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <PageSearchSidebar blog01={blog01} blog07={blog07} blog08={blog08} />
          </Col>
        </Row>

        <section className="section">
          <Row>
            <Container>
              <Col xs="12">
                <Pagination listClassName="justify-content-center mb-0">
                  <PaginationItem><PaginationLink to="#" previous>Prev</PaginationLink></PaginationItem>
                  <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink to="#" next>Next</PaginationLink></PaginationItem>
                </Pagination>
              </Col>
            </Container>
          </Row>
        </section>

      </Container>

    </React.Fragment>
  )
}
