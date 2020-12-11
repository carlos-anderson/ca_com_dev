// React Basic and Bootstrap
import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardImg, CardBody, Media } from 'reactstrap';
import PostListItem from './PostListItem';

import PageSearchSidebar from './Search/PageSearchSidebar';
import TutorialsHeader from "./TutorialsHeader";

class PagePostList extends React.Component {
    state = {
      posts: []
    };

    componentDidMount() {
      this.getPosts();
    }

    async getPosts() {
      const res = await axios.get("http://localhost:5000/posts");
      this.setState({
        posts: res.data
      })
      //console.log(res);
    }

    renderList() {
      return this.state.posts.map(post => {
        return (
          <PostListItem post={post} key={post._id} />
        );
      })
    }

    render() {
      return (
          <div>{this.renderList()}</div>
      )
    }
}

export default PagePostList;
