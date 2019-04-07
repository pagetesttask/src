import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './resources/styles/sass/main.sass';
import './resources/styles/css/font.css';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import rootReducers from './store/reducers/rootReducers'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(rootReducers, composeEnhancers(
	applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<ErrorBoundary>
			<App/>
		</ErrorBoundary>
	</Provider>)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
