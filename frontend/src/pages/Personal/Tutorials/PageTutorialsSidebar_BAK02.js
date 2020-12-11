// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth-context';
import { Container, Button, Row, Col, Alert, Form, FormGroup, Label, Input, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';

import PageSearchSidebar from './PageSearchSidebar';
import TutorialsHeader from "./TutorialsHeader";

import Modal from '../../../components/Modal/Modal';

import PostList from '../../../components/Posts/PostList';

import FeatherIcon from 'feather-icons-react';

// import images
import blog01 from '../../../assets/images/blog/01.jpg';
import blog02 from '../../../assets/images/blog/02.jpg';
import blog03 from '../../../assets/images/blog/03.jpg';
import blog04 from '../../../assets/images/blog/04.jpg';
import blog05 from '../../../assets/images/blog/05.jpg';
import blog06 from '../../../assets/images/blog/06.jpg';
import blog07 from '../../../assets/images/blog/07.jpg';
import blog08 from '../../../assets/images/blog/08.jpg';

class PageTutorialsSidebar extends Component {
  state = {
    creating: false,
    posts: []
  }

  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.titleElRef = React.createRef();
    this.descriptionElRef = React.createRef();
    this.categoryElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.imageElRef = React.createRef();
    this.bodyElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchPosts();
  }

  startCreatePostHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });

    const title = this.titleElRef.current.value;
    const description = this.descriptionElRef.current.value;
    const category = this.categoryElRef.current.value;
    const date = this.dateElRef.current.value;
    const image = this.imageElRef.current.value;
    const body = this.bodyElRef.current.value;

    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      category.trim().length === 0 ||
      date.trim().length === 0 ||
      image.trim().length === 0 ||
      body.trim().length === 0
    ) {
      return;
    }

    const post = { title, description, category, date, image, body };
    console.log(post);

    const requestBody = {
      query: `
        mutation {
          createPost(postInput: { title: "${title}", description: "${description}", category: "${category}", date: "${date}", image: "${image}", body: "${body}" }) {
            _id
            title
            description
            category
            date
            image
            body
          }
        }
      `
    };

    const token = this.context.token;

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedPosts = [...prevState.posts];
          updatedPosts.push({
            _id: resData.data.createPost._id,
            title: resData.data.createPost.title,
            description: resData.data.createPost.description,
            category: resData.data.createPost.category,
            date: resData.data.createPost.date,
            image: resData.data.createPost.image,
            body: resData.data.createPost.body,
            author: {
              _id: this.context.userId
            }
          });
          return { posts: updatedPosts };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchPosts() {
    const requestBody = {
      query: `
        query {
          posts {
            _id
            title
            description
            category
            date
            image
            body
            author {
              _id
              email
            }
          }
        }
      `
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        const posts = resData.data.posts;
        this.setState({ posts: posts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <TutorialsHeader />
          <Container>

            <section className="section">
              <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                  <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4"><span className="text-primary">Full Stack Design and Development</span></h4>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={8} md={6}>

                  <PostList posts={this.state.posts} />

                  <Row>

                    <Col xs="12">
                      <Pagination listClassName="justify-content-center mb-0">
                        <PaginationItem><PaginationLink to="#" previous>Prev</PaginationLink></PaginationItem>
                        <PaginationItem active><PaginationLink to="#">1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink to="#" next>Next</PaginationLink></PaginationItem>
                      </Pagination>
                    </Col>

                  </Row>

                </Col>


                {/* sidebar */}
                <Col lg={4} xs={12} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <Row>
                    <React.Fragment>

                      {this.context.token && <React.Fragment>
                        {this.state.creating && (
                          <Modal
                            title="Add a Post!"
                            canCancel
                            canConfirm
                            onCancel={this.modalCancelHandler}
                            onConfirm={this.modalConfirmHandler}
                          >
                            <form className="mt-3">
                              <Row>

                                <Col md="12">
                                  <FormGroup className="position-relative">
                                    <Label>Title <span className="text-danger">*</span></Label>
                                    <i><FeatherIcon icon="user" className="fea icon-sm icons" /></i>
                                    <input id="title" name="title" type="text" ref={this.titleElRef} placeholder="Title" className="form-control pl-5" required />
                                  </FormGroup>
                                </Col>

                                <Col md="12">
                                  <FormGroup className="position-relative">
                                    <Label>Description <span className="text-danger">*</span></Label>
                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                    <input id="description" type="text" ref={this.descriptionElRef} placeholder="Description" name="description" className="form-control pl-5" required />
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup className="position-relative">
                                    <Label>Category <span className="text-danger">*</span></Label>
                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                    <input id="category" type="text" ref={this.categoryElRef} placeholder="Category" name="category" className="form-control pl-5" required />
                                  </FormGroup>
                                </Col>

                                <Col md="6">
                                  <FormGroup className="position-relative">
                                    <Label>Date <span className="text-danger">*</span></Label>
                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                    <input id="date" type="datetime-local" ref={this.dateElRef} placeholder="Date" name="date" className="form-control pl-5" required />
                                  </FormGroup>
                                </Col>

                                <Col md="12">
                                  <FormGroup className="position-relative">
                                    <Label>Image <span className="text-danger">*</span></Label>
                                    <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                                    <input id="image" type="text" ref={this.imageElRef} placeholder="Image" name="image" className="form-control pl-5" required />
                                  </FormGroup>
                                </Col>

                                <Col md="12">
                                  <FormGroup className="position-relative">
                                    <Label>Body</Label>
                                    <i><FeatherIcon icon="message-circle" className="fea icon-sm icons" /></i>
                                    <textarea id="body" ref={this.bodyElRef} placeholder="Body Content" rows="6" name="body" className="form-control pl-5" required></textarea>
                                  </FormGroup>
                                </Col>

                              </Row>
                            </form>

                          </Modal>
                        )}

                        <div className="widget mb-4 pb-2">
                          <button className="btn btn-primary w-100" onClick={this.startCreatePostHandler}>
                            Add a Post
                          </button>
                        </div>

                      </React.Fragment>}
                    </React.Fragment>
                  </Row>

                  <PageSearchSidebar blog01={blog01} blog07={blog07} blog08={blog08} />

                </Col>

              </Row>
            </section>

          </Container>
        </section>

      </React.Fragment>
    )
  }
}

export default PageTutorialsSidebar;
