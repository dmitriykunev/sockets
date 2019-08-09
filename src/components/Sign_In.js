import {
  Container,
  Header,
  Content,
  Footer,
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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }


  handleLogin = (event) => {
    this.setState({
      login : event
    })
  };

  handlePassword = (event) => {
    this.setState({
      password : event
    })
  };

  handleRedirect = (event) => {
    console.log('I work');
    event.preventDefault();
    return this.props.history.push('/signUp')
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      login: this.state.login,
      password: this.state.password
    };
    const {data} = await DataTransaction.login(user);
    this.props.dispatch({
      type: 'SIGN_IN',
      data
    });
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('token', data.token);
  };

  render() {
    return (
      <div className="login-page">
        <Container>
          <Header>
            <Navbar appearance="inverse" color="green">
              <Navbar.Header>
                <h2><p> Log Into the Application </p></h2>
              </Navbar.Header>
            </Navbar>
          </Header><br />
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                  <Form fluid onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <ControlLabel>Username or email address</ControlLabel>
                      <Input name="name"
                             type="text"
                             value={this.state.login}
                             className="rs-input"
                             placeholder="Your Login"
                             autoComplete="username"
                             onChange={this.handleLogin}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <Input name="password"
                             type="password"
                             value={this.state.password}
                             autoComplete="current-password"
                             className="rs-input"
                             placeholder="Your Password"
                             onChange={this.handlePassword}
                      />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary" type="submit" color="green">Sign in</Button>
                        <Button appearance="ghost"
                                type="button"
                                onClick={this.handleRedirect}
                                href={'/signUp'}
                                color="green"
                        >
                          I'm not registered</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </div>
    )
  };
};

export default connect(mapStateToProps) (SignIn);
