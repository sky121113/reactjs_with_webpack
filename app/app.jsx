// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
//建立一個DOM物件
const Element = () => (<h1>Hello, world!mama!!</h1>)
//使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(<Element />,(document.getElementById('root'):any));
ReactDOM.render(<Timer />,(document.getElementById('timer'):any));