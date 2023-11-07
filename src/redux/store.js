import { createStore } from 'redux';
import rootReducer from './reducer';

// const middleware = applyMiddleware(delayDoneMiddleware);
const store = createStore(rootReducer);

export default store;
