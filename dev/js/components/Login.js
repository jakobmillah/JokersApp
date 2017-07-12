import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../actions/action-login'

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }
  responseFacebook (response) {
      console.log(response);
      //anything else you want to do(save to localStorage)... 
    }

  render () {

    return (
      <div>
        <input type='text' ref='username' className="form-control" placeholder='Username'/>
        <input type='password' ref='password' className="form-control" placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>
        
      </div>
    );
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }
}


// "state.clanUsers" is set in reducers/index.js
const mapStateToProps = state => {
    return {
        auth: state.auth
    };
}
const mapDispatchToProps = dispatch => {
  return{
    onLoginClick: (creds) => {
      dispatch(loginUser(creds))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);