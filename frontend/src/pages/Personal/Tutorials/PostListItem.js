// React Basic and Bootstrap
import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';

class PostListItem extends React.Component {
    constructor (props) {
      super(props);

      this.onShowPost = this.onShowPost.bind(this);
     }

    onShowPost() {
      window.location.pathname = `/posts/${this.props.post._id}`;
    }

    renderDate(dateString) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const date = new Date(dateString);

      return `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    }

    renderTags(tags) {
      return tags.map(tag => {
        return <span key={tag}>{tag}</span>
      })
    }

    render() {
      const { post } = this.props;

      return (
        <button onClick={this.onShowPost}>
          <h3>{post.title}</h3>
          <span>{this.renderDate(post.createdAt)}</span>
          <div>{this.renderTags(post.tags)}</div>
        </button>
      )
    }
}

export default PostListItem;
