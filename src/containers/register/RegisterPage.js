import React from 'react'
import '../login/login.css';

const RegisterPage = () => {
    return (
        <div className="container">
            <form  name="registerForm" className="form-signin well">
                <h2 className="form-signin-heading">Register</h2>

                <div className="control-group">
                    <div className="controls">
                        <input type="text" placeholder="Username" name="username" className="input-block-level" />               
                    </div>
                </div>

                <div className="control-group">
                    <div className="controls">
                        <input type="password" placeholder="Password" name="password"  className="input-block-level" />                               
                    </div>
                </div>

                <label for="rememberme" className="checkbox">
                    <input type="radio"  name="level"/>Administrator
                </label>
                <label for="rememberme" className="checkbox">
                    <input type="radio" name="level"/>Normal User
                </label>

                <div className="control-group">
                    <div className="controls">
                        <button type="submit" className="btn btn-large btn-primary" disabled="disabled">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
export default RegisterPage