import React, { Component } from "react";
import './Navbar.css';
import { Menu, Header, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state

        return(
          <div className="navbar">
              <Menu pointing secondary>
                <Menu.Item
                  name={this.props.first}
                  active={activeItem === this.props.first}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='messages'
                  active={activeItem === 'messages'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='friends'
                  active={activeItem === 'friends'}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu>
          </div>
        )
    }
}