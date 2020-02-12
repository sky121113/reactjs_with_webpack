// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
// import MarkdownEditor from './markdownEditor';
import { Element, HandleEvent } from './test';

import EasyForm from './easyForm';
// 建立一個DOM物件
const Hello = () => (<h1>Hello, world!mama!!</h1>);
// 使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(<Hello />, (document.getElementById('root'):any));
ReactDOM.render(<Timer />, (document.getElementById('timer'):any));
// ReactDOM.render(<MarkdownEditor />, (document.getElementById('markdownEditor'):any));
ReactDOM.render(<Element />, (document.getElementById('test'):any));
ReactDOM.render(<HandleEvent />, (document.getElementById('checkButton'):any));
ReactDOM.render(<EasyForm />, (document.getElementById('easyForm'):any));
