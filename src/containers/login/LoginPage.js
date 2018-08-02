import React, {Component} from 'react'
import  './login.css'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.reload = false;
    this.state = {
      username: '',
      password: '',
      rememberme: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.send = this.send.bind(this);
  }

  handleInputChange(event) {

    const {target:{value, name}} = event;
    console.log('nm:', name)
    this.setState({
      [name]: value
    });  

  }

  send(e) {
    e.preventDefault();
    // validation
    if ( this.state.username.trim() === '' || this.state.password.trim() === '' ) { return; }
    const data = this.state;

    fetch('http://localhost:8000/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify( data ) // body data type must match "Content-Type" header
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response)
      this.setState({
        username: '',
        password: ''
      });
    })
    .catch(error => console.error(`Fetch Error =\n`, error));
  }

  render() {
    return (
      <div className="container">
            <form  name="loginForm" className="form-signin well">
              <h2 className="form-signin-heading">Please log in</h2>

              <div className="control-group">
                  <div className="controls">
                    <input type="text" placeholder="Username" name="username" value={this.state.username}  onChange={this.handleInputChange} className="input-block-level" />               
                  </div>
              </div>

              <div className="control-group">
                  <div className="controls">
                    <input type="password" placeholder="Password" name="password" value={this.state.password}    onChange={this.handleInputChange} className="input-block-level" />                               
                  </div>
              </div>

              <label for="rememberme" className="checkbox">
                  <input type="checkbox" data-ng-model="rememberme" name="rememberme"/>Remember me
              </label>

              <div className="control-group">
                  <div className="controls">
                    <button className="btn btn-large btn-primary" onClick={this.send}>Log in</button>
                  </div>
              </div>

            </form>
      </div>

    )
  }
}


export default LoginPage
