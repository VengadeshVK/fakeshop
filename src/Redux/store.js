import {createStore} from 'redux'
import reducers from './Reducers/index'

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION_ &&  window.__REDUX_DEVTOOLS_EXTENSION()     
    );

export default store;