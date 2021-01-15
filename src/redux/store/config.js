import {createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/index';

 const configStore = () => {
  const store = createStore(
    rootReducer,    
     compose(applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__
     ? window.__REDUX_DEVTOOLS_EXTENSION__()
     : (f) => f),
  );
  return store;
};


export default configStore;
