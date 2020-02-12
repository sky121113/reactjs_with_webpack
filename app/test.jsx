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

class HandleEvent extends React.Component<{}, {count:number, gender:string, welcome:string}> {
  constructor(props:{}) {
    super(props);
    this.state = {
      count: 0,
      gender: 'W',
      welcome: '您好,小姐',
    };
  }

  writeConsole = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    console.log('點了點了點了');
  }

  changeGender = (e:Event, a:string) => {
    console.log(`傳入參數${a}`);
    // Flow會檢查必定要HTMLSelectElement的物件才能有輸入值
    if (e.target instanceof HTMLSelectElement) {
      const val = e.target.value;
      if (val === 'W') {
        this.setState(() => ({ welcome: '您好,小姐' }));
      } else {
        this.setState(() => ({ welcome: '您好,先生' }));
      }
      this.setState(() => ({ gender: val }));
    }
  }

  render() {
    const { count, gender, welcome } = this.state;
    return (
      <div>
        <input type="button" onClick={this.writeConsole} value="點我看console" />
        <div>
          點了
          { count }
          次
          {' '}
        </div>
        {/* <select multiple={true} value={['M', 'W']} onChange={this.changeGender}></select> */}
        <select value={gender} onChange={(e) => this.changeGender(e, 'AA')}>
          <option value="M">男</option>
          <option value="W">女</option>
        </select>
        <div>{welcome}</div>
        <HelloTitle title={gender} />
        <List />
      </div>
    );
  }
}

const HelloTitle = (props:{title:string}) => {
  const { title } = props;
  let name = '';
  if (title === 'W') {
    name = '小姐';
  } else {
    name = '先生';
  }
  return (
    <h1>
      您好,
      {name}
    </h1>
  );
};

const List = () => {
  const list = ['A', 'B', 'C'];
  const lists = list.map((eachlist) => <li key={eachlist.toString()}>{eachlist}</li>);
  return (
    <ul>{lists}</ul>
  );
};

export { Element, HandleEvent };
