
import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import Scroller from '../util/iscroll/index.min'
class Home extends React.Component {
    render() {
        return <div style={{position:'absolute',width:'100%',height:'100%'}}>
            <Scroller>
                <div className='home'>
                    <div className='home-item'><a href="/charts/ring">ring</a></div>
                    <div className='home-item'><a href="/charts/pie">pie</a></div>
                </div>
            </Scroller>
        </div>
    }
}
export default  Home