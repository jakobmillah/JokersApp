import React from 'react';
import Search from '../containers/search';
import Header from '../components/Header';
import Main from '../components/Main';
import {loginUser} from '../actions/action-login'
import Login from '../components/Login'

require('../../scss/style.scss');

const App = () => (
    <div>        
        <Header />
        <Main />
    </div>
);

export default App;
