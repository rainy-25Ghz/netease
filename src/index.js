import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClippedDrawer from './components/ClippedDrawer';
// import App from './App';
// import store from './app/store';
// import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
// import HeadBar from './components/HeadBar.js'
// import Root from './components/Root';
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <ClippedDrawer />, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
