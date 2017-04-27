import React, { Component } from 'react';
import { Column, Icon, Title, Subtitle, Image, Content, Card, CardImage, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderIcon, CardHeaderTitle } from 're-bulma';

const style={ padding: '10px' };
const cardStyle={ width: '100%' };

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  render() {
    return (
      <Column style={style} size="isOneThirdDesktop">
        <Card style={cardStyle}>
          <CardImage>
            <Image src={ this.props.img } ratio="isSquare" />
          </CardImage>
          <CardContent>
            <Content>
              <Title size='is3'>{ this.props.title }</Title>
              <Subtitle size='is5'>{ this.props.location }</Subtitle>
              { this.props.content }
            </Content>
          </CardContent>
          <CardFooter>
            <CardFooterItem>
              <Icon icon="fa fa-thumbs-o-up" size="isMedium" />
            </CardFooterItem>
            <CardFooterItem>
              <Icon icon="fa fa-commenting-o" size="isMedium" />
            </CardFooterItem>
            <CardFooterItem>
              <Icon icon="fa fa-share-square-o" size="isMedium" />
            </CardFooterItem>
          </CardFooter>
        </Card>
      </Column>
    );
  }
}
