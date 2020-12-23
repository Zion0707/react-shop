import { createStore, compose } from 'redux';
import reducers from './reducers/index';

// 激活 Redux Devtools 工具，前提是需要在浏览器中添加 Redux Devtools 工具。
const composeEnhanceser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhanceser());

export default store;
