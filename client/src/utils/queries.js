import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

// added the auth.js in serrver file and this started up- ran this query in graphql

// ou'll need to create the following front-end files:

// * `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.
// checks out in graph QL
