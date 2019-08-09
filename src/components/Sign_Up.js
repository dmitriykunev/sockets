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
import React, {Component} from 'react';
// import DataTransaction from './dataTransaction';

class SignUp extends Component {
  state = {
    login: '',
    password: ''
  };

  handleLogin = (event) => {
    this.setState({
      login: event.target.value
    })
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  };

  handleSubmit = async () => {
    const user = {
      login: this.state.login,
      password: this.state.password
    };
    // const {data} = await DataTransaction.login(user);
  };

  render() {
    return (
      <div className="login-page">
        <Container>
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Header>
                <a className="navbar-brand logo">Socket Chat</a>
              </Navbar.Header>
            </Navbar>
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                  <Form fluid onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <ControlLabel>Username or email address</ControlLabel>
                      <Input name="name" onChange={this.handleLogin} />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <Input name="password" type="password" onChange={this.handlePassword} />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button appearance="primary">Sign in</Button>
                        <Button appearance="link">Forgot password?</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer>Powered by @</Footer>
        </Container>
      </div>
    )
  };
};

export default SignUp
