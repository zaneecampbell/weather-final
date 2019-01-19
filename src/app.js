import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPage from '../src/components/PortfolioPage';
// import configureStore from './store/configureStore';
// import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import { firebase } from './firebase/firebase';

// const store = configureStore();

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true  // updates material-ui typography automatically when next major release happens (Q1 2019)

const jsx = (
    <PortfolioPage />
);

// let hasRendered = false;
// const renderApp = () => {
//   if (hasRendered === false) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

ReactDOM.render(jsx, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     renderApp();
//     if (history.location.pathname === '/') {
//       history.push('/dashboard');
//     };
//   } else {
//     // store.dispatch(logout());
//     renderApp();
//     // history.push('/');
//   }
// });