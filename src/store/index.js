import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';


// redux-saga 例子
import createSagaMiddleware from 'redux-saga'
import mySaga from 'src/reducers/actions/saga'

import reducers from '../reducers';

const  ENV = process.env.NODE_ENV;

const logger = createLogger();
let enhancer;
if (ENV =="production") {

    enhancer = compose(applyMiddleware(thunk, promise)
    );
}
else {
    enhancer = compose(applyMiddleware(thunk, promise, logger));
}

const sagaMiddleware = createSagaMiddleware()
enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(reducers, {}, enhancer);

if (ENV !="production" && module.hot.active) {
    module.hot.accept('../reducers', () => {
        const nextReducers = require('../reducers');
        console.log("nextReducers",nextReducers)
        store.replaceReducer(nextReducers);
    });
}
sagaMiddleware.run(mySaga)

export default store;
