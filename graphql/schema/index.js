const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Comment {
      _id: ID!
      post: Post!
      user: User!
      createdAt: String!
      updatedAt: String!
    }

    type Post {
      _id: ID!
      title: String!
      description: String!
      category: [String!]!
      date: String!
      image: String!
      body: String!
      author: User!
    }

    type User {
      _id: ID!
      email: String!
      password: String
      createdPosts: [Post!]
    }

    type AuthData {
      userId: ID!
      token: String!
      tokenExpiration: Int!
    }

    input PostInput {
      title: String!
      description: String!
      category: [String!]!
      date: String!
      image: String!
      body: String!
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      posts: [Post!]!
      comments: [Comment!]!
      login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
      createPost(postInput: PostInput): Post
      createUser(userInput: UserInput): User
      postComment(postId: ID!): Comment!
      deleteComment(commentId: ID!): Post!
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);