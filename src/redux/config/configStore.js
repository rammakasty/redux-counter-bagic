// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';
import users  from '../modules/users';

const rootRrducer = combineReducers({
    counter,
    users: users,
});
const store = createStore(rootRrducer);

export default store;
