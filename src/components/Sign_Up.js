import {
  Container,
  Header,
  Content,
  Navbar,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
  Input
} from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';
import React, {Component} from 'react';
import '../index.css';
import DataTransaction from './dataTransaction';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return state
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      ban: 'false',
      login: '',
      role: 'user',
      email: '',
      password: '',
      token: Math.random().toString(36).substr(2, 25)
    };
  }


  handleLogin = (event) => {
    this.setState({
      login : event
    });
    const payload = event;
    this.props.dispatch({
      type: 'TYPE_IN_LOGIN',
      payload
    });
  };

  handleEmail = (event) => {
    this.setState({
      email : event
    });
    const payload = event;
    this.props.dispatch({
      type: 'TYPE_IN_EMAIL',
      payload
    });
  };

  handleUserName = (event) => {
    this.setState({
      userName : event
    });
    const payload = event;
    this.props.dispatch({
      type: 'TYPE_IN_USERNAME',
      payload
    });
  };

  handlePassword = (event) => {
    this.setState({
      password : event
    });
    const payload = event;
    this.props.dispatch({
      type: 'TYPE_IN_PASSWORD',
      payload
    });
  };

  handleRedirect = (event) => {
    console.log('I work');
    event.preventDefault();
    return this.props.history.push('/signIn')
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      email: this.state.email,
      token:this.state.token,
      role: this.state.role,
      login: this.state.login,
      password: this.state.password
    };
    const {data} = await DataTransaction.signUp(user);
    console.log(data);
    if(data) {
    this.props.dispatch({
      type: 'SIGN_UP_SUCCESS',
      data
    });
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('token', data.token);
    localStorage.setItem('login', data.login);
    return this.props.history.push('/chat')
  } else {
    this.props.dispatch({
      type: 'SIGN_UP_FAIL',
      data
    });
  }
  };

  render() {
    return (
      <div className="login-page">
        <Container>
          <Header>
            <Navbar appearance="inverse" color="green">
              <Navbar.Header>
                <h2><p> Sign Up to the Service </p></h2>
              </Navbar.Header>
            </Navbar>
          </Header><br />
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>SignUp</h3>} bordered>
                  <Form fluid onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <ControlLabel>Username</ControlLabel>
                      <Input name="name"
                             type="text"
                             size="lg"
                             value={this.state.userName}
                             className="rs-input"
                             placeholder="Your User Name"
                             autoComplete="username"
                             onChange={this.handleUserName}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Login</ControlLabel>
                      <Input name="name"
                             type="text"
                             size="lg"
                             value={this.state.login}
                             className="rs-input"
                             placeholder="Your Login"
                             autoComplete="login"
                             onChange={this.handleLogin}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Email</ControlLabel>
                      <Input name="E-mail"
                             type="email"
                             size="lg"
                             value={this.state.email}
                             autoComplete="current-email"
                             className="rs-input"
                             placeholder="Your Email"
                             onChange={this.handleEmail}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <Input name="password"
                             type="password"
                             size="lg"
                             value={this.state.password}
                             autoComplete="current-password"
                             className="rs-input"
                             placeholder="Your Password"
                             onChange={this.handlePassword}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" type="submit" color="green">Sign Up</Button>
                        <Button appearance="ghost"
                                type="button"
                                onClick={this.handleRedirect}
                                href={'/signIn'}
                                color="green"
                        >
                          I'm already registered</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    )
  };
};

export default connect(mapStateToProps) (SignUp);
