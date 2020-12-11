// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Label, FormGroup, Button, Card, CardBody } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import AuthContext from '../../context/auth-context';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import loginImg from '../../assets/images/user/login.png';
import signup from '../../assets/images/user/signup.png';

class PageAuth extends Component {

  state = {
    isLogin: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitLoginHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const token = this.context.token;

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
          userId
          token
          tokenExpiration
          }
        }
      `
    }

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
        console.log(token);
      }
      return res.json();
    })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
          console.log(resData);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  submitSignupHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}) {
            _id
            email
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
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
        console.log(token);
      }
      return res.json();
    })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <Link to="/" className="btn btn-icon btn-soft-primary"><i><FeatherIcon icon="home" className="icons" /></i></Link>
        </div>
                
        {this.state.isLogin && ( <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col lg="7" md="6">
                <div className="mr-lg-5">
                  <img src={loginImg} className="img-fluid d-block mx-auto" alt="" />
                </div>
              </Col>
              <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="login-page bg-white shadow rounded border-0">
                  <CardBody>
                    <div className="card-title text-center">
                      <h4 className="mb-4">Login</h4>
                    </div>
                    <form className="login-form mt-4" onSubmit={this.submitLoginHandler}>
                      <Row>
                        <Col lg="12">
                          <FormGroup className="position-relative">
                            <Label htmlFor="email">Your Email <span className="text-danger">*</span></Label>
                            <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                            <input type="email" className="form-control pl-5" ref={this.emailEl} name="email" id="email" placeholder="Enter Your Email Address" required />
                          </FormGroup>
                        </Col>

                        <Col lg="12">
                          <FormGroup className="position-relative">
                            <Label htmlFor="password">Password <span className="text-danger">*</span></Label>
                            <i><FeatherIcon icon="lock" className="fea icon-sm icons" /></i>
                            <input type="password" id="password" className="form-control pl-5" ref={this.passwordEl} required />
                          </FormGroup>
                        </Col>

                        <Col lg="12">
                          <div className="d-flex justify-content-between">
                            <FormGroup>
                              <div className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <Label className="custom-control-label" htmlFor="customCheck1">Remember me</Label>
                              </div>
                            </FormGroup>
                            <p className="forgot-pass mb-0"><Link to="auth-re-password" className="text-dark font-weight-bold">Forgot password ?</Link></p>
                          </div>
                        </Col>
                        <Col lg="12" className="mb-0">
                          <Button type="submit" color="primary" block>Sign in</Button>
                        </Col>
                        <Col lg="12" className="mt-4 text-center">
                          <h6>Or Login With</h6>
                          <ul className="list-unstyled social-icon mb-0 mt-3">
                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="github" className="fea icon-sm fea-social" /></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></Link></li>
                            <li className="list-inline-item"><Link to="#" className="rounded"><i><FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></i></Link></li>
                          </ul>
                        </Col>
                        <Col xs="12" className="text-center">
                          <p className="mb-0 mt-3">
                            <small className="text-dark mr-2">Don't have an account ?</small>
                            <Link to="/page-auth" onClick={this.switchModeHandler} className="text-dark font-weight-bold">
                              Switch to {this.state.isLogin ? 'Signup' : 'Login'}
                            </Link>
                          </p>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      )}

        {!this.state.isLogin && (
          <section className="bg-home d-flex align-items-center">
            <Container>
              <Row className="align-items-center">
                <Col lg="7" md="6">
                  <div className="mr-lg-5">
                    <img src={signup} className="img-fluid d-block mx-auto" alt="" />
                  </div>
                </Col>
                <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <Card className="login_page shadow rounded border-0">
                    <CardBody>
                      <h4 className="card-title text-center">Signup</h4>
                      <form className="login-form mt-4" onSubmit={this.submitSignupHandler}>
                        <Row>

                          <Col md="12">
                            <FormGroup className="position-relative">
                              <Label htmlFor="email">Your Email <span className="text-danger">*</span></Label>
                              <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                              <input type="email" className="form-control pl-5" ref={this.emailEl} name="email" id="email" placeholder="Enter Email" required />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup className="position-relative">
                              <Label htmlFor="password">Password<span className="text-danger">*</span></Label>
                              <i><FeatherIcon icon="lock" className="fea icon-sm icons" /></i>
                              <input type="password" className="form-control pl-5" ref={this.passwordEl} name="password" id="password" placeholder="Enter password" required />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup className="position-relative">
                              <Label htmlFor="confirmpassword">Confirm Password<span className="text-danger">*</span></Label>
                              <i><FeatherIcon icon="lock" className="fea icon-sm icons" /></i>
                              <input type="password" className="form-control pl-5" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                            </FormGroup>
                          </Col>

                          <Col md="12">
                            <FormGroup>
                              <div className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck01" />
                                <Label className="custom-control-label" htmlFor="customCheck01">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                              </div>
                            </FormGroup>
                          </Col>
                          <Col md="12" className="mb-0">
                            <Button type="submit" color="primary" block>Register</Button>
                          </Col>
                          <Col md="12" className="mt-4 text-center">
                            <h6>Or Signup With</h6>
                            <ul className="list-unstyled social-icon mb-0 mt-3">
                              <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></Link></li>
                              <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="github" className="fea icon-sm fea-social" /></i></Link></li>
                              <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></Link></li>
                              <li className="list-inline-item"><Link to="#" className="rounded"><i><FeatherIcon icon="gitlab" className="fea icon-sm fea-social" /></i></Link></li>
                            </ul>
                          </Col>
                          <Col xs="12" className="text-center">
                          <p className="mb-0 mt-3"><small className="text-dark mr-2">Already have an account ?</small>
                            <Link to="/page-auth" onClick={this.switchModeHandler} className="text-dark font-weight-bold">
                              Switch to {this.state.isLogin ? 'Signup' : 'Login'}
                            </Link>
                          </p>
                          </Col>
                        </Row>
                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        )}

      </React.Fragment>
    );
  }
}

export default PageAuth;