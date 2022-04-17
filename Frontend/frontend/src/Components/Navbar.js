import React, { Component } from "react";
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './Navbar.css';

export default class Navbar extends Component {
    state = { activeItem: 'actividad' }

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
                  as={Link} to={this.props.firstLink}
                />
                <Menu.Item
                  name= {this.props.second}
                  active={activeItem === this.props.second}
                  onClick={this.handleItemClick}
                  as={Link} to={this.props.secondLink}
                />
                <Menu.Item
                  name={this.props.third}
                  active={activeItem === this.props.third}
                  onClick={this.handleItemClick}
                  as={Link} to={this.props.thirdLink}
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