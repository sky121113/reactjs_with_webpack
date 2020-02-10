// @flow
import React from 'react';
import Remarkable from 'remarkable';
// import * as Remarkable from 'remarkable';
// import RemarkableReactRenderer from 'remarkable-react';

type Props = {};
type States = {
  text: string,
  markdownText: string
};
class MarkdownEditor extends React.Component<Props, States> {
  constructor(prop:Props) {
    super(prop);
    // this.handleChange = this.handleChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.state = {
      text: 'Type some *markdown* here!',
      markdownText: '',
    };
  }

  handleChange = () => {
    const { text } = this.state;
    this.setState(() => ({ markdownText: text }));
  }

  handleChange = (e: Event) => {
    // Flow會檢查必定要HTMLInputElement的物件才能有輸入值
    if (e.target instanceof HTMLTextAreaElement) {
      this.setState({ markdownText: e.target.value });
    }
  }

  rawMarkup = () => {
    const md = new Remarkable();
    const { markdownText } = this.state;
    return md.render(markdownText);
  }

  render() {
    const { text } = this.state;
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          // ref="textarea"
          value={text}
        />
        <h3>Output</h3>
        <div className="content">{this.rawMarkup()}</div>
      </div>
    );
  }
}

export default MarkdownEditor;
