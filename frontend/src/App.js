import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/';
import { Route, Redirect, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import AuthContext from './context/auth-context';

// Import Css
import './App.css';
import './Apps.scss';
import './assets/css/materialdesignicons.min.css';
import './assets/css/colors/default.css';

// Include Routes
import routes from './routes';

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent></WrappedComponent>
        </Layout>
      ); 
    }
  };
}

class App extends Component {
    state = {
      token: null,
      userId: null,
      tokenExpiration: null
    }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId, tokenExpiration: tokenExpiration });
    };

    logout = () => {
      this.setState({ token: null, userId: null, tokenExpiration: null });
    };

  Loader = () => {
    return (
      <div id="preloader">
          <div id="status">
              <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
              </div>
          </div>
      </div>
    );
}
  render() {

    return (
      
      <AuthContext.Provider value={{
        token: this.state.token,
        userId: this.state.userId,
        tokenExpiration: this.state.tokenExpiration,
        login: this.login,
        logout: this.logout
      }}
      >
        <React.Fragment>
          <Router>
            <Suspense fallback={this.Loader()} >
              <Switch>
                {this.state.token && <Redirect from="/page-auth" to="/page-tutorials-sidebar" exact />}
                {routes.map((route, idx) =>
                  route.isWithoutLayout ?
                    <Route path={route.path} exact={route.exact} component={route.component} key={idx} />
                    :
                    <Route path={route.path} exact component={withLayout(route.component)} key={idx} />
                )}
              </Switch>
            </Suspense>
          </Router>
        </React.Fragment>
      </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
