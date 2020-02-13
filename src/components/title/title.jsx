import React from 'react';

const Title = (props:{title:string}) => {
  const { title } = props;
  return <h1>{title}</h1>;
};
// class Title extends React.Component {
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }
// 把該目錄的Title組件匯出
export default Title;
