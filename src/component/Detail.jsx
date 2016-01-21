import React from 'react';
import { Modal, Button } from 'antd';

const Detail = React.createClass({
  getInitialState() {
    return {
      ModalText: '对话框的内容',
      visible: false
    };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
    this.setState({
      ModalText: '对话框将在两秒后关闭',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  },
  handleCancel() {
    console.log('点击了取消');
    this.setState({
      visible: false
    });
  },
  render() {
    return <div>
      <a type="primary" onClick={this.showModal}>显示对话框</a>
      <Modal title="明细"
        visible={this.state.visible}
        onOk={this.handleOk}
        confirmLoading={this.state.confirmLoading}
        onCancel={this.handleCancel}>
        <p>{this.state.ModalText}</p>
      </Modal>
    </div>;
  }
});

export default Detail;