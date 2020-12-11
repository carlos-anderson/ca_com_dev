import React from 'react';
import { Row } from 'reactstrap';
import PostItem from './PostItem';

const postList = props => {
  const posts = props.posts.map(post => {
    return (
      <PostItem
        key={post._id}
        postId={post._id}
        title={post.title}
        date={new Date(post.date).toLocaleDateString()}
        image={post.image}
        body={post.body}
      />

    );
  });

  return (
    <Row>
      {posts}
    </Row>
  );
}

export default postList;