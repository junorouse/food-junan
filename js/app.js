import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory,
    Switch
} from 'react-router-dom';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import Post from './post';
import TopMenu from './topMenu';

try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {
    console.log("WTF");
}

import { Columns, Column, Tabs, TabGroup, Tab} from 're-bulma';

const style = { padding: '10px' };

let content = '아 배고프다.. 돼지고기와 함께 간 이곳은.. 정말로 맛있었다... 하아 배고파';
content = "숙대의 명물 조대포, 언제나 가도 맛있다. 황젯살이 진짜 하.. 어깨부위 라고 하는데 1인분당 돼지 한마리다 .. 아 진짜 배고프다 으아아아앙아아아악 뭐시켜먹지?";

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
    constructor () {
        super();
        document.title='Junan - Best Food';
        // get bet posts and render
        // this.state = {posts: [{title: "조대포", location: "남영역", content: content}]};
        this.state = {
            posts: null
        };
    }

    componentDidMount() {
        fetch('/api/bests')
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                this.setState({ posts });
            })
    }

    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <Columns responsive='isDesktop' isMultiline>
                    {this.state.posts != null ? (
                        this.state.posts.map(post => (
                            <Post title={post.title} location={post.location} content={post.content} img="static/img.jpeg" />
                        ))
                    ) : (
                        <h2>Loading ..</h2>
                    )}
                </Columns>
            </Column>
        );
    }
}



class Worst extends Component {
    constructor () {
        super();
        document.title='Junan - Worst Food';
    }
    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <h2>Worst Restaurant</h2>
            </Column>
        );
    }
}

class NotFound extends Component {
    constructor () {
        super();
        document.title='404 Not Found';
    }
    render() {
        return (
            <Column offset='isOffset2Desktop' size='is8'>
                <h2>Not Found</h2>
            </Column>
        );
    }
}

render((
    <Router history = {browserHistory}>
        <Container>
            <TopMenu />
                <Switch>
                    <Route exact path='/' component={Best} />
                    <Route path='/best' component={Best} />
                    <Route path='/worst' component={Worst} />
                    <Route component={NotFound} />
                </Switch>
        </Container>
    </Router>
), document.getElementById('reactEntry'))
