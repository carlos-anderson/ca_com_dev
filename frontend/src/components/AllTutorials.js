import React, { Component } from 'react';
import { Query } from 'react-apollo';
import TUTORIALS_QUERY from './all-tutorials/index';
import Tutorial from './Tutorial';

class AllTutorials extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={TUTORIALS_QUERY}>
       {({ loading, error, data }) => {

          if (loading) return <div>Fetching tutorials.....</div>
          if (error)   return <div>Error fetching tutorials</div>

          const items = data.tutorials;
          return (
            <div>
              <div className="container mt-4">
                <div className="row">
                   {items.map(item => <Tutorial key={item.id} tutorial={item} />)}
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
  }

};
export default AllTutorials;
