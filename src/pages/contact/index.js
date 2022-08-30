import React, { Component } from 'react';
import { Typography, Card, Form, Input, Row, Button, Image, Col } from 'antd'

class Contact extends Component {
  render() { 
    return ( 
      <div>
        <Typography.Title level={2}>Contact</Typography.Title>
        <Card>
          <Typography.Title level={5}>Send your inquiry to us and we'll get back to you quickly</Typography.Title>
          <Row gutter={[64, 64]}>
            <Col md={12}>
              <Form
                layout='vertical'
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="name"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                >
                  <Input.TextArea />
                </Form.Item>
                <Button htmlType='submit' type='primary'>Send Message</Button>
              </Form>
            </Col>
            <Col>
              <Image preview={false} width={350} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            </Col>
          </Row>
        </Card>
      </div>
     );
  }
}
 
export default Contact;