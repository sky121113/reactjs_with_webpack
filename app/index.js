// @flow
import { createStore } from 'redux';

const data = {
  message: [{ key: '1', name: '神Q', message: '嗨！大家好啊！' },
    { key: '2', name: '小馬', message: '早安啊！昨天有沒有好好發文？' },
    { key: '3', name: '王子', message: 'ㄛ！別說了，那真的超級累！' },
    { key: '4', name: '神Q', message: '哈哈哈！加油啦！再一下就結束了！' },
    { key: '5', name: '王子', message: '結束後我一定要爆睡一頓！' }],
};

const addMessage = (article) => ({ type: 'addMessage', payload: article });
/* 將一開始拿到的資料指定給第一個參數state，第二個參數action會在執行動作時傳入當初設定的指令物件，例如執行addNum時會將整個物件丟給action */
const rootReducer = (state = data, action) => {
  // 用switch.type來判斷指令為何
  switch (action.type) {
    case 'addMessage':
      /* 如果是addNum的話就把初始數字加上payload的值，並回傳
          **注意這裡只做回傳，並不對原資料做異動 */
      return '';
    default:
      // 沒有符合執行動作的條件就不做處理直接回傳
      return state;
  }
};
const store = createStore(rootReducer);

// 這邊多加了一個data是想讓大家確認原本的資料是不會變的！
window.store = store;
window.addMessage = addMessage;

export default store;
