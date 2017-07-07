import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import Login from './Login'
import Logout from './Logout'

import {loginUser} from '../actions/action-login';
import {logoutUser} from '../actions/action-logout';

class Header extends Component{
  
  render(){

    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            {!this.props.auth.isAuthenticated &&
              <Login
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
            }
            
            {this.props.auth.isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />          
            }
          </ul>
        </nav>
      </header>
    )
  }
}

  // "state.clanUsers" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({loginUser: loginUser}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Header);