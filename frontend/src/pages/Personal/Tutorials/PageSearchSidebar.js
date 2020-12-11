import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

class PageSearchSidebar extends Component {
  render() {
    return (
      <React.Fragment>

        <Card className="border-0 sidebar sticky-bar rounded shadow">
          <CardBody>

            <div className="widget mb-4 pb-2">
              <h4 className="widget-title">Search</h4>
              <div id="search2" className="widget-search mt-4 mb-0">
                <Form role="search" method="get" id="searchform" className="searchform">
                  <div>
                    <Input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                    <Input type="submit" id="searchsubmit" value="Search"/>
                  </div>
                </Form>
              </div>
            </div>

            <div className="widget mb-4 pb-2">
              <h4 className="widget-title">Catagories</h4>
              <ul className="list-unstyled mt-4 mb-0 blog-catagories">
                <li><Link to="#">UI/UX</Link> <span className="float-right">13</span></li>
                <li><Link to="#">Programming</Link> <span className="float-right">09</span></li>
                <li><Link to="#">Social Media</Link> <span className="float-right">18</span></li>
                <li><Link to="#">React</Link> <span className="float-right">20</span></li>
                <li><Link to="#">JSX</Link> <span className="float-right">22</span></li>
              </ul>
            </div>

            <div className="widget mb-4 pb-2">
              <h4 className="widget-title">Recent Post</h4>
              <div className="mt-4">
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog07} className="img-fluid rounded"/></Link></div>
                  <div className="post-recent-content float-left"><Link to="#">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog08} className="img-fluid rounded"/></Link></div>
                  <div className="post-recent-content float-left"><Link to="#">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                </div>
                <div className="clearfix post-recent">
                  <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog01} className="img-fluid rounded"/></Link></div>
                  <div className="post-recent-content float-left"><Link to="#">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                </div>
              </div>
            </div>

            <div className="widget mb-4 pb-2">
              <h4 className="widget-title">Tags Cloud</h4>
              <div className="tagcloud mt-4">
                <Link to="#" className="rounded">UI/UX Design</Link>
                <Link to="#" className="rounded ml-1">Social Media</Link>
                <Link to="#" className="rounded ml-1">Javascript</Link>
                <Link to="#" className="rounded">React</Link>
                <Link to="#" className="rounded ml-1">JSX</Link>
                <Link to="#" className="rounded ml-1">Electron</Link>
                <Link to="#" className="rounded">Responsive Design</Link>
                <Link to="#" className="rounded ml-1">HTML5</Link>
                <Link to="#" className="rounded ml-1">CSS</Link>
                <Link to="#" className="rounded ml-1">Native Apps</Link>
              </div>
            </div>

          </CardBody>
        </Card>

      </React.Fragment>
    );
  }
}

export default PageSearchSidebar;
