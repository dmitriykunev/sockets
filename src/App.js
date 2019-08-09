import React, { Component } from 'react'
// import './App.css'
// import Chat from './components/Chat'
// import SignIn from "./components/Sign_In";
// import Sign_Up from "./components/Sign_Up";
// import 'rsuite/styles/less/index.less';

class App extends Component {
  render() {
    return (
      <div>
      {/*<header className="App-header">*/}
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*<h1 className="App-title">Welcome to React</h1>*/}
      {/*</header>*/}
      {/*<Chat />*/}
      {/*  <SignIn/>*/}
        { this.props.history.push('/signIn')}
      </div>
    )
  }
}

export default App
