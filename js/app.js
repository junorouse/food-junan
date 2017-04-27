import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, Link, browserHistory } from 'react-router-dom';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import Post from './post';

try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {
    console.log("WTF");
}

import { Columns, Column, Tabs, TabGroup, Tab} from 're-bulma';

const style = { padding: '10px' };

let content = '아 배고프다.. 돼지고기와 함께 간 이곳은.. 정말로 맛있었다... 하아 배고파';

class Container extends Component {
    render() {
        return (
                <Columns responsive='isDesktop' isMultiline>
                    {this.props.children}
                </Columns>
        );
    }
}

class Best extends Component {
    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <Columns responsive='isDesktop' isMultiline>
                    <Post title="조대포" location='남영역' content={content} img="static/img.jpeg" />
                    <Post title="타타미" location='숙대입구'content={content} img="static/img2.jpeg" />
                    <Post title="쉑쉑버거" location='두바이몰' content={content} img="static/img3.jpeg" />
                    <Post title="무슨 양꼬치" location='두바이몰' content={content} img="static/img4.jpeg" />
                    <Post title="아웃벡 스테이크하우스" location='동탄메타폴리스' content={content} img="static/img5.jpeg" />
                </Columns>
            </Column>
        );
    }
}

class TopMenu extends Component {
    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <Tabs alignment='isCentered'>
                    <TabGroup>
                        <Link to='/'><Tab isActive>베스트 맛집</Tab></Link>
                        <Link to='/worst'><Tab>거긴 가면 안돼!</Tab></Link>
                        <Tab>문의</Tab>
                    </TabGroup>
                </Tabs>
            </Column>
        );
    }
}

class Worst extends Component {
    constructor () {
        super();
        document.title='worst..';
    }
    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <h2>Worst Restaurant</h2>
            </Column>
        );
    }
}

render((
    <Router history = {browserHistory}>
        <Container>
            <TopMenu />
                <Route exact={true} path='/' component={Best} />
                <Route path='/best' component={Best} />
                <Route path='/worst' component={Worst} />
        </Container>
    </Router>
), document.getElementById('reactEntry'))
