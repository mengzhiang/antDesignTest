import '../common/lib';
import Grid from '../component/Grid';
import Query from '../component/Query';
import {columns, data} from '../Mock/MockData';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
	<div>
		<Query />
		<Grid columns={columns} dataSource={data} />
	</div>, document.getElementById('react-content'));
