import React, { Component } from 'react';
import { Column, Icon, Title, Subtitle, Image, Content, Card, CardImage, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderIcon, CardHeaderTitle,
Modal } from 're-bulma';

const style={ padding: '10px' };
const cardStyle={ width: '100%' };

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isOpen: false,
      isFirstOpen: false,
      detailPost: '',
    };
    // if already liked --> #1fc8db
    this.footerStyle = {
      cursor: 'pointer'
    };
    
    this.modalContentStyle = {
      whiteSpace: 'pre-line'
    };

    this.getPost = this.getPost.bind(this);
  }

  getPost(event) {
    this.setState({ isOpen: true });
    if (!this.state.isFirstOpen) {
    fetch('/api/test')
        .then(res => res.json())
        .then(body => {
          this.setState(body);
        })
      this.setState({isFirstOpen: true});
    }
  }

  render() {
    return (
      <Column style={style} size="isOneThirdDesktop">
        <Card style={cardStyle}>
          <CardImage onClick={this.getPost}>
            <Image src={ this.props.img } ratio="isSquare" />
          </CardImage>
          <CardContent onClick={this.getPost}>
            <Content>
              <Title size='is3'>{ this.props.title }</Title>
              <Subtitle size='is5'>{ this.props.location }</Subtitle>
              { this.props.content }
            </Content>
          </CardContent>
          <CardFooter>
            <CardFooterItem style={ this.footerStyle }>
              <a><Icon icon="fa fa-thumbs-o-up" size="isMedium" /></a>
            </CardFooterItem>
            <CardFooterItem style={ this.footerStyle }>
              <Icon icon="fa fa-commenting-o" size="isMedium" />
            </CardFooterItem>
            <CardFooterItem style={ this.footerStyle }>
              <Icon icon="fa fa-share-square-o" size="isMedium" />
            </CardFooterItem>
          </CardFooter>
        </Card>
        {/* state로 comment창 관리하기 */}
        <Modal
            type="card"
            headerContent="title"
            footerContent={<div style={{ padding: '20px'}} >comment</div>}
            isActive={this.state.isOpen}
            onCloseRequest={() => this.setState({ isOpen: false })}
          >
            <Content style={ this.modalContentStyle }>
              { this.state.detailPost }              
            </Content>
        </Modal>
      </Column>
    );
  }
}
