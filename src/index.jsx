// @flow
import React from 'react';
import ReactDOM from 'react-dom';
// 下面這樣import會預設取此資料夾底下的index.js
import Test from './components/test/';
import Main from './components/main/';
// 建立一個DOM物件
// const Hello = () => (<h1>Hello, world!mama!!</h1>);
// 使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(<Main />, (document.getElementById('root'):any));
// ReactDOM.render(<MarkdownEditor />, (document.getElementById('markdownEditor'):any));
ReactDOM.render(<Test />, (document.getElementById('test'):any));
