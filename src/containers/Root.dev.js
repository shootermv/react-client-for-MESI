import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route, Redirect } from 'react-router-dom'
import App from './App'
import UserPage from './UserPage'
import RepoPage from './RepoPage'
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
import AdminPage from './admin/AdminPage';
import { connect } from "react-redux";
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const Root = ({ store, isLoggedIn }) => (
  <Provider store={store}>
    <div>     
      <Route path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      <RestrictedRoute
        path="/admin"
        component={AdminPage}
        isLoggedIn={isLoggedIn}
      />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default connect(state => ({
  isLoggedIn: state.isLoggedin!== null
}))(Root);

