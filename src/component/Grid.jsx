import React from 'react';
import { Table, Button } from 'antd';

const Grid = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],
      loading: false,
    };
  },
  getCheckboxProps: function(record) {
    return {
      defaultChecked: true, // 配置默认勾选的列
      disabled: record.name === '李大嘴5'    // 配置无法勾选的列
    };
  },
  start() {
    this.setState({ loading: true });
    // 模拟 ajax 请求，完成后清空
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  },
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      getCheckboxProps: function(record) {
        return {
          defaultChecked: false, // 配置默认勾选的列
          disabled: record.name === '李大嘴5'    // 配置无法勾选的列
        };
      },
      onChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ' + selectedRowKeys);
      },
      onSelect: function(record, selected, selectedRows) {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: function(selected, selectedRows) {
        console.log(selected, selectedRows);
      },
    };
    const hasSelected = selectedRowKeys.length > 0;
    return <div>
      <div style={{marginBottom: 16}}>
         <Button type="primary" onClick={this.start}
           disabled={!hasSelected} loading={loading}>操作</Button>
         <span style={{marginLeft: 8}}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
      </div>
      <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.dataSource} />
    </div>;
  }
});

export default Grid;
