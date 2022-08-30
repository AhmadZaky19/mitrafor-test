import React, { Component } from 'react';
import { Card, Form, Input, Typography, Button, Table, Space, Modal, Tag } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import { Link, useParams } from 'react-router-dom';
import "./index.css";
import Product from "../../data/mitrafor.json";


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Product.data,
      selected: null,
      modal: false,
    }
    // console.log(this.state.search);

    this.tableColumns = [
      {
        title: 'Name Product',
        dataIndex: 'name',
        key: 'name',
        render: (value) => <b>{value}</b>
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render: (value, record) => 
        <Space>
          <Button type='link' onClick={() => this.selectData(this.value)}>Detail</Button>
        </Space >
      },
    ];

    this.modalColumns = [
      {
        title: 'Name Product',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku',
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
      },
    ];
  }

  submitFilter = (e) => {
    const searchData = e.search
    const searchedData = this.state.data.filter((item) => {
      return Object.values(item).join("").toLowerCase().includes(searchData.toLowerCase())
    })
    this.setState({data: searchedData})
  }

  selectData = (record) => {
    this.setState({ 
      selected: record, 
      modal: true,
    })
  }

  closeModal = () => {
    this.setState({ 
      selected: null, 
      modal: false,
    })
  }

  render() { 
    return ( 
      <div>
        <Typography.Title level={2}>Home</Typography.Title>
        <Card style={{marginBottom: 20}}>
          <Form 
          onFinish={this.submitFilter} 
          layout='inline'>
            <Form.Item name="search">
              <Input placeholder='Search data..' suffix={<SearchOutlined />} />
            </Form.Item>
            <Button htmlType='submit' type='primary'>Search</Button>
          </Form>
        </Card>
        <Card>
          <Table
            columns={this.tableColumns}
            dataSource={this.state.data}
            bordered
          />
        </Card>

        <Modal
          title="Detail Product"
          visible={this.state.modal}
          onCancel={this.closeModal}
          footer={false}
          maskClosable={false}
        >
          <Table
            columns={this.modalColumns}
            dataSource={this.state.data}
            bordered
          />
        </Modal>
      </div>
    );
  }
}
 
export default Home;