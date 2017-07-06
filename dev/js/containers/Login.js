import { FacebookLogin } from 'react-facebook-login-component';
import React, {Component} from 'react';
import {connect} from 'react-redux';

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
          <h1>Welcome to login!</h1>
          <FacebookLogin socialId="1622727697746427"
                        language="en_US"
                        scope="public_profile,email"
                        responseHandler={this.responseFacebook}
                        xfbml={true}
                        fields="id,email,name"
                        version="v2.9"
                        className="facebook-login"
                        buttonText="Login With Facebook"/>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        credentials: state.credentials
    };
}

export default connect(mapStateToProps)(Login);