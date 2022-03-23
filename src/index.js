import './index.css';
import reportWebVitals from './reportWebVitals';
import storeRedux from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export let rerenderEntireTree = (state) => {
  debugger;
ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={storeRedux.dispatch.bind(storeRedux)} storeRedux = {storeRedux}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerenderEntireTree(storeRedux.getState());

storeRedux.subscribe(() => {
  let state = storeRedux.getState(); 
  rerenderEntireTree(state);
});

reportWebVitals();