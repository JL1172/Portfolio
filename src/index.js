import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './components/reducers/rootReducer';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,enhancers(applyMiddleware(thunk))); 

root.render(
  <Provider store = {store}>
  <BrowserRouter> 
  <ThemeProvider theme = {theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

