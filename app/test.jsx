// @flow
import React from 'react';

const HelloName = (props:{name:string}) => {
  const { name } = props;
  return (
    <h1>
      Hello,
      { name }
      ！
    </h1>
  );
};

const Element = () => (
  <div>
    {<HelloName name="mama" />}
    {<HelloName name="mader" />}
    <h2>Nice to meet you!</h2>
  </div>
);

class CheckButton extends React.Component<{}, {count:number}> {
  constructor(props:{}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  writeConsole = () => {
    this.setState((prevProps) => ({ count: prevProps.count + 1 }));
    console.log('點了點了點了');
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <input type="button" onClick={this.writeConsole} value="點我看console" />
        <div>
          點了
          { count }
          次
          {' '}
        </div>
      </div>
    );
  }
}

export { Element, CheckButton };
