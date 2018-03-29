/**
 *  自助卡配置后台首页
 * @author Focus Wong
 */

import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import style from './index.scss'
class Home extends React.Component {
  render() {
       return <div style={{position:'absolute',width:'100%',height:'100%'}}>
           <Route exact path='/home'
                  render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
          <Route exact path='/phoneverify'
                 render={props => (<LazyRoute {...props} component={import ('./phoneVerify')}/>)}/>
           <Route exact path='/modal'
                  render={props => (<LazyRoute {...props} component={import ('./modal')}/>)}/>
           <Route exact path='/switchtabs'
                  render={props => (<LazyRoute {...props} component={import ('./SwitchTabs')}/>)}/>
           <Route exact path='/iscroll'
                  render={props => (<LazyRoute {...props} component={import ('./iscroll')}/>)}/>
           <Route exact path='/queue'
                  render={props => (<LazyRoute {...props} component={import ('./queue')}/>)}/>
        </div>
  }
}
export default  Home