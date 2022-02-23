import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updatePostText, updateMessageText} from './redux/state';

export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updatePostText={updatePostText} updateMessageText={updateMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
