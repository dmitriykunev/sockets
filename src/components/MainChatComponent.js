import React, {Component} from 'react';
import Sidebar from './sidebar';
import Messages from './Messages';
// import Input from './input';
import { connect } from 'react-redux';
import {
  Content,
  Header,
  Navbar,
  Button
} from 'rsuite';

const mapStateToProps = state => {
    return state
  };

  const URL = 'ws://localhost:3030';
  

class MainChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebar: false,
          message: '',
          messages: []
        };
      }

      ws = new WebSocket(URL);

      componentDidMount() {
        this.ws.onopen = () => {
          // on connecting, do nothing but log it to the console
          console.log('connected')
        };
    
        this.ws.onmessage = evt => {
          // on receiving a message, add it to the list of messages
          const message = JSON.parse(evt.data);
          this.addMessage(message)
        };
    
        this.ws.onclose = () => {
          console.log('disconnected');
          // automatically try to reconnect on connection loss
          this.setState({
            ws: new WebSocket(URL),
          })
        }
      }

      addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }));

      submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.props.userName, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message)
  };


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
              <div><Sidebar status={this.state.sidebar}/></div>
              <div> 
              {this.state.messages.map((message, index) =>
                <Messages
                  key={index}
                  message={message.message}
                  name={message.name}
              />)}</div>
              <div>
              <form
                  action="."
                  onSubmit={e => {
                   e.preventDefault();
                   this.submitMessage(this.state.message);
                  this.setState({ message: '' })
        }}
      >
        <input
          type="text"
          placeholder={'Enter your message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        /><br />
        <Button color="green" size="md" appearance="ghost" type="submit">Send</Button>
      </form>
              </div>
                </Content>
            </div>
        )
      }
}

export default connect(mapStateToProps) (MainChatComponent);