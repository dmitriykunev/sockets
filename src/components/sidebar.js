import {
    Sidenav,
    Nav,
    Dropdown,
    Toggle,
    Icon
    } from 'rsuite';
import React, {Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state
  };

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
          sidebar: true,
          activeKey: '1'
        };
    }

        handleToggle = () => {
            this.setState({
                sidebar: this.props.sidebar
              })
        };

        handleSelect = (eventKey) => {
            this.setState({
              activeKey: eventKey
            });
          };

        handleUserList = () => {
          let element = '';
                const data = this.props.userList;
                data.map(function(elem) {
                    for(let i=1; i <= data.length; i++) {
                    element = <Dropdown.Item eventKey="3-i">{elem.userName}</Dropdown.Item>
                    } return element
                })
          }

          render() {
            const { sidebar } = this.state;
        
            return (
              <div style={{ width: 250 }}>
                <Toggle onChange={this.handleToggle} checked={sidebar} />
                <hr />
                <Sidenav
                  expanded={sidebar}
                  defaultOpenKeys={['3', '4']}
                  activeKey={this.state.activeKey}
                  onSelect={this.handleSelect}
                >
                  <Sidenav.Body>
                    <Nav>
                      <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                        Dashboard
                      </Nav.Item>
                      <Dropdown
                        placement="rightTop"
                        eventKey="2"
                        title="UserList"
                        icon={<Icon icon="group" />}
                      >
                        {this.handleSelect}
                      </Dropdown>
                    </Nav>
                  </Sidenav.Body>
                </Sidenav>
              </div>
            );
          }
        }

export default connect(mapStateToProps) (Sidebar);