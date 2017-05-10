import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Link,
} from 'react-router-dom';

import { Columns, Column, Tabs, TabGroup, Tab} from 're-bulma';


const linkStyle = { textDecoration: 'none' };


export default class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {Active: document.location.pathname};
        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(x) {
        this.setState(prevState => ({
            Active: x
        }));
    }

    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <Tabs alignment='isCentered'>
                    <TabGroup>
                        <Link to='/' onClick={() => this.menuClick('/')} style={linkStyle}><Tab isActive={(this.state.Active == '/') ? true:false}>베스트 맛집</Tab></Link>
                        <Link to='/worst' onClick={() => this.menuClick('/worst')} style={linkStyle}><Tab isActive={(this.state.Active == '/worst') ? true:false}>거긴 가면 안돼!</Tab></Link>
                        <Link to='/contact' onClick={() => this.menuClick('/contact')} style={linkStyle}><Tab isActive={(this.state.Active == '/contact') ? true:false}>문의</Tab></Link>
                    </TabGroup>
                </Tabs>
            </Column>
        );
    }
}
