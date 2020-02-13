// @flow

import React from 'react';

type Props = {};
type States = {
  secondsElapsed: number,
  nowDate :string
}
class Timer extends React.Component<Props, States> {
  interval: any;

  constructor(props:Props) {
    super(props);
    // 與 ES5 React.createClass({}) 不同的是 component 內自定義的方法需要自行綁定 this context，或是使用 arrow function
    // this.tick = this.tick.bind(this);
    // 初始 state，等於 ES5 中的 getInitialState
    this.state = {
      secondsElapsed: 0,
      nowDate: new Date().toLocaleTimeString(),
    };
  }

  // componentDidMount 為 component 生命週期中階段 component 已插入節點的階段，通常一些非同步操作都會放置在這個階段。這便是每1秒鐘會去呼叫 tick 方法
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  // componentWillUnmount 為 component 生命週期中 component 即將移出插入的節點的階段。這邊移除了 setInterval 效力
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 累加器方法，每一秒被呼叫後就會使用 setState() 更新內部 state，讓 Component 重新 render
  // 箭頭函式
  tick = () => {
    // 解構賦予用法
    // const { nowTime } = this.state;
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1,
    }));
    this.setState({ nowDate: new Date().toLocaleTimeString() });
  }

  // render 為 class Component 中唯一需要定義的方法，其回傳 component 欲顯示的內容
  render() {
    const {
      secondsElapsed, nowDate,
    } = this.state;
    return (
      <div>
        <div>
          Seconds Elapsed:
          {secondsElapsed}
        </div>
        <div>
          now Time :
          {nowDate}
        </div>
      </div>
    );
  }
}

export default Timer;
