import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.querySelector("#root"));

