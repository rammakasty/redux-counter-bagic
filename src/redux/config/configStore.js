// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';

const rootRrducer = combineReducers({
    counter,
});
const store = createStore(rootRrducer);

export default store;
