import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './container/App';
import configureStore from './store/configureStore';
import '../assets/styles/style.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
