import React, { Component } from "react";
import {Header} from 'semantic-ui-react'
import Icon from '../Images/books.png'

export default class Headerr extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state

        return(
            <div className="header">
                <Header as='h2'>
                    <img src={Icon} alt="logo" />
                    <Header.Content>
                        School WebSite
                        <Header.Subheader>
                            Official WebSite 
                        </Header.Subheader>
                    </Header.Content>
                </Header>
            </div>
       
        )
    }
}