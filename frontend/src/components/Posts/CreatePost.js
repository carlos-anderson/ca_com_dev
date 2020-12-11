// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import { Container, Button, Row, Col, Alert, Form, FormGroup, Label, Input, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';

import Modal from '../Modal/Modal';

import FeatherIcon from 'feather-icons-react';


class CreatePost extends Component {
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
    )
  }
}

export default CreatePost;
