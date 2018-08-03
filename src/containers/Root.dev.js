import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import AdminPage from './admin/AdminPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>     
      <Route path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/admin" component={AdminPage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
