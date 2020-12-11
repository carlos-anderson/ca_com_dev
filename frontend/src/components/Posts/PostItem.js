import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardImg, CardBody } from 'reactstrap';

const postItem = props => {
  return (
    <Col lg={6} md={12} className="mb-4 pb-2" key={props.postId}>
      <Card className="blog rounded border-0 shadow">
        <div className="position-relative">
          <CardImg top src={props.image} className="rounded-top" alt="" />
          <div className="overlay rounded-top bg-dark"></div>
        </div>

        <CardBody className="content">
          <h5><Link to="page-tutorial-detail" className="card-title title text-dark">{props.title}</Link></h5>
          <div className="post-meta d-flex justify-content-between mt-3">
            <ul className="list-unstyled mb-0">
              <li className="list-inline-item mr-2  mb-0">
                <Link to="#" className="text-muted like">
                  <i className="mdi mdi-heart-outline mr-1"></i>
                  10
              </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" className="text-muted comments">
                  <i className="mdi mdi-comment-outline mr-1 ml-1"></i>
                  5
              </Link>
              </li>
            </ul>

            <Link to={`/page-tutorial-detail/${props.postId}`} className="text-muted readmore">Read More
            <i className="mdi mdi-chevron-right"></i>
            </Link>
          </div>
        </CardBody>

        <div className="author">
          <small className="text-light user d-block">
            <i className="mdi mdi-account"></i>
            Carlos Anderson
          </small>

          <small className="text-light date">
            <i className="mdi mdi-calendar-check"></i>
            {props.date}
          </small>
        </div>

      </Card>
    </Col>
  );
}

export default postItem;