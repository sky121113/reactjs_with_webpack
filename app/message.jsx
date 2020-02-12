import React from 'react';
import ReactDOM from 'react-dom';
// 從react-redux匯入Provider組件
import { Provider, connect } from 'react-redux';
// 從index.js中匯出store，如果大大的路徑和我不同，記得要改一下！
import store from './index';

const mapStateToProps = (state) => ({ data: state.message });

const MessageList = (props:{data:Array<>}) => {
  const { data } = props;
  const message = data.map((item) => (
    <li key={item.key}>
      {item.name}
      ：
      {item.message}
    </li>
  ));

  return (
    <ul>
      {message}
    </ul>
  );
};
// class MessageList extends React.Component<{data:Array<>}> {
//   render() {
//     const { data } = this.props;
//     const message = data.map((item) => (
//       <li key={item.key}>
//         {item.name}
// ：
//         {item.message}
//       </li>
//     ));

//     return (
//       <ul>
//         {message}
//       </ul>
//     );
//   }
// }
const List = connect(mapStateToProps)(MessageList);

const MessageForm = () => (
  // 使用Provider組件記得要透過store屬性傳入import進來的store資料
  <Provider store={store}>
    {/* 原本的MessageList已經被connect包成List了 */}
    <List />
  </Provider>
);

// class MessageForm extends React.Component {
//   render() {
//     return (
//       // 使用Provider組件記得要透過store屬性傳入import進來的store資料
//         <Provider store={store}>
//           {/* 原本的MessageList已經被connect包成List了 */}
//           <List />
//         </Provider>
//       );
//     }
// }


ReactDOM.render(<MessageForm />, document.getElementById('reduxDemo'));
