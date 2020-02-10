// @flow
import React from 'react';

type Props = {
  name: string
}
const HelloName = (props:Props) => {
  const { name } = props;
  return (
    <h1>
      Hello,
      { name }
      ！
    </h1>
  );
};

const element = () => (
  <div>
    {<HelloName name="mama" />}
    {<HelloName name="mader" />}
    <h2>Nice to meet you!</h2>
  </div>
);

export default element;
