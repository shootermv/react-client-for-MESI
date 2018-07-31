import React from 'react'
import  './login.css'

const LoginPage = () => {

  return (
    <div className="container">
          <form ng-submit="login()" name="loginForm" className="form-signin well required">
            <h2 className="form-signin-heading">Please log in	</h2>
            <div className="control-group">
                <div className="controls">
                  <input type="text" data-ng-model="username" placeholder="Username" name="username"
                className="input-block-level" />
                </div>
            </div>
            <div className="control-group">
                <div className="controls">
                  <input type="password" data-ng-model="password"
                placeholder="Password" name="password" required=""
                className="input-block-level" />
                </div>
            </div>
            <label for="rememberme" className="checkbox">
                <input type="checkbox" data-ng-model="rememberme" name="rememberme"/ >Remember me
            </label>
            <div className="control-group">
                <div className="controls">
                  <button type="submit" className="btn btn-large btn-primary" disabled="disabled">Log in</button>
                </div>
            </div>
          </form>
    </div>

  )
}


export default LoginPage
