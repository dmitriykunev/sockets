import React, {Component} from 'react';
import Sidebar from './sidebar';
// import Message from './message';
// import Input from './input';
import { connect } from 'react-redux';
import {
  Content,
  Container,
  Header,
  Navbar,
  Button
} from 'rsuite';

const mapStateToProps = state => {
    return state
  };
  

class MainChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebar: true
        };
      }

      handleLogout = (event) => {
        localStorage.clear();
        return this.props.history.push('/')
      }
    
      render() {
        return (
            <div>        
          <Header>
            <Navbar appearance="inverse" color="green">
              <h2> Welcome to the Chat Application</h2>
                <Button type="button"
                color='red'
                size='lg'
                onClick={this.handleLogout}
                align='left'
                >Logout</Button>              
            </Navbar>
          </Header><br />
          <Content>
              
                <Sidebar />
                </Content>
            </div>
        )
      }
}

export default connect(mapStateToProps) (MainChatComponent);