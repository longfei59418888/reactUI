

import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import style from '../index.scss'
class Home extends React.Component {
    render() {
        let path = this.props.match.path
        return <div style={{position:'absolute',width:'100%',height:'100%'}}>
            <Route exact path={`${path}`}
                   render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
            <Route  path={`${path}/ring`}
                   render={props => (<LazyRoute {...props} component={import ('./ring')}/>)}/>
            <Route  path={`${path}/pie`}
                    render={props => (<LazyRoute {...props} component={import ('./pie')}/>)}/>
        </div>
    }
}
export default  Home