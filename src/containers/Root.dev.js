import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import LoginPage from './login/LoginPage'
import TopBar from '../components/TopBar'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <TopBar/>
      <Route path="/login" component={App} />
      <Route path="/" component={LoginPage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
