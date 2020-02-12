// @flow
import React from 'react';

type States = {
  fullName:string,
  gender:string,
  inputPrompt:string,
  introduction:string,
  lists:Array<{id:string, listName:string, check:boolean}>,
}
class EasyForm extends React.Component<{}, States> {
  constructor(props:{}) {
    super(props);
    this.state = {
      fullName: '',
      gender: 'M',
      inputPrompt: '請輸入姓名',
      introduction: '',
      lists: [{ id: '01', listName: '寫文章', check: false }, { id: '02', listName: '打程式', check: false }, { id: '03', listName: '耍廢', check: true }],
    };
  }

  handleChange = (e:Event) => {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ fullName: e.target.value });
    } else if (e.target instanceof HTMLSelectElement) {
      this.setState({ gender: e.target.value });
    } else if (e.target instanceof HTMLTextAreaElement) {
      this.setState({ introduction: e.target.value });
    }
    // 下面這個方法 還不知道要用什麼instanceof
    // if (e.target instanceof EventTarget) {
    //   const changeName = e.target.name;
    //   console.log(changeName);
    //   // 再把他目前的value拿去更改state
    //   this.setState({ [changeName]: e.target.value });
    // }
  }

  checkboxChange = (e:Event, index:number) => {
    const { lists } = this.state;
    const arrLists = [...lists];
    if (arrLists[index].check) {
      arrLists[index].check = false;
    } else {
      arrLists[index].check = true;
    }
    // 改完後用setState將lists重新設定為arrLists
    this.setState({ lists: arrLists });
  }

  submitForm = (e:Event) => {
    // if (e.target instanceof HTMLFormElement) {
    //   const data = new FormData(e.target);
    //   console.log(data.get('fullName'));
    // }
    const {
      fullName, gender, introduction, lists,
    } = this.state;
    const status:Array<string> = [];
    lists.map((list) => (list.check ? (status.push(list.listName)) : ''));
    console.log(`現在輸入的名字是：${fullName}`);
    console.log(`現在輸入的性別是：${gender}`);
    console.log(`現在輸入的自我介紹是：${introduction}`);
    console.log(`現在選擇的代辦清單有:${status.join(',')}`);
    e.preventDefault();
  }

  render() {
    const {
      fullName, gender, inputPrompt, introduction, lists,
    } = this.state;
    const listCheck = lists.map((list, index) => (
      /* 既然使用迴圈，就要設key對吧！ */
      <div key={list.id}>
        {/* 這裡將checked屬性設定成清單中的check，true就打勾、false就沒勾
          onChange中代入第二個參數index，是為了辨別變動的是第幾個索引的事項
          最後因為是迴圈，所以要記得設key對吧！ */}
        <input
          type="checkbox"
          checked={list.check}
          onChange={(e) => this.checkboxChange(e, index)}
          key={list.id}
        />
        <label>{list.listName}</label>
      </div>
    ));

    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>姓名:</label>
          <input id="fullName" name="fullName" value={fullName} onChange={this.handleChange} placeholder={inputPrompt} />
        </div>
        <div>
          <label>性別:</label>
          <select value={gender} id="gender" name="gender" onChange={this.handleChange}>
            <option value="M">男</option>
            <option value="W">女</option>
          </select>
        </div>
        <div>
          <label>自我介紹：</label>
          <br />
          <textarea
            id="introduction"
            name="introduction"
            value={introduction}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>每日待辦清單：</label>
          {/* 直接將剛剛跑完迴圈的變數放進來 */}
          {listCheck}
        </div>
        <input type="submit" value="送出表單" />
      </form>
    );
  }
}

export default EasyForm;
