/**
 *  自助卡配置后台首页
 * @author Focus Wong
 */

import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
class Home extends React.Component {
  render() {
       return <div>
          <Route exact path='/phoneverify'
                 render={props => (<LazyRoute {...props} component={import ('./phoneVerify')}/>)}/>
           <Route exact path='/modal'
                  render={props => (<LazyRoute {...props} component={import ('./modal')}/>)}/>
           <Route exact path='/switchtabs'
                  render={props => (<LazyRoute {...props} component={import ('./SwitchTabs')}/>)}/>
        </div>

  }
}
export default  Home