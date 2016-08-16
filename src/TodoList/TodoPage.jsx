import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'containers/App'
import AppReducers from 'reducers/AppReducers'

let store = createStore(AppReducers, window.devToolsExtension && window.devToolsExtension());

export class TodoPage extends React.Component {
  render() {
    return (
  <Provider store={store}>
    <App />
  </Provider>
    );
  }
}
