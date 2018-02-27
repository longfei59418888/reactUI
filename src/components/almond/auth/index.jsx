import React, { Component, PropTypes } from 'react'
import Storage from 'utils/storage';
import {auth,getQueryString,getKey} from 'utils/fetch';



var STORE = new Storage();

//授权层
class Auth extends Component {
  componentWillMount(){
    if(!STORE.get('token') && !getQueryString('token')){
      auth();
      return;
    }
    if(getQueryString('token') && !STORE.get('token')){
      STORE.set('token',getQueryString('token'),50);
      location.replace(location.origin + location.pathname);
    }
  }
 

  render() {
    if(!STORE.get('RSA_PUB_KEY')){
      getKey();
    }
    // let {isAuth} = this.state;
    if(!STORE.get('token'))return <div></div>
    return (
      <div className="auth-serviceCenter">
        {this.props.children}
      </div>
    )
  }
}


export default Auth;
