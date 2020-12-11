import React, { useState } from 'react';

const initialState = {
  id: '',
  title: 'Temp Title',
  description: '',
  category: [],
  date: '',
  image: '',
  body: '',
  author: ''
};

export const PostContext = React.createContext();

const PostStore = () => {
  const [state, setState] = useState(initialState);

  return (
    <PostContext.Provider value={[state, setState]}>
      <PostStore />
    </PostContext.Provider>
  );
};

export default PostContext;