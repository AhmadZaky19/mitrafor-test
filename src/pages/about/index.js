import React, { Component } from 'react';
import { Card, Typography, Image, Row, Col } from 'antd';

class Home extends Component {
  render() { 
    return ( 
      <div>
        <Typography.Title level={2}>About</Typography.Title>
        <Card style={{marginBottom: 20}}>
          <Row gutter={[32, 32]}>
            <Col md={18}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
              <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
              <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
            </Col>
            <Col md={6}>
            <Image preview={false} width={250} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
 
export default Home;