import React from 'react';
import Detail from '../component/Detail';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}, {
  title: '操作',
  key: 'operation',
  render: function(text, record) {
    return <span>
      <Detail>查看</Detail>
      <span className="ant-divider"></span>
      <a href="#">对账</a>
      <span className="ant-divider"></span>
    </span>;
  }
}];

const data = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: '李大嘴' + i,
    age: 32,
    address: '西湖区湖底公园' + i + '号'
  });
}

export default {
  columns : columns,
  data : data
};