/**
 *  自助卡配置后台首页
 * @author Focus Wong
 */

import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import Scroller from './util/iscroll/index.min'
class Home extends React.Component {
    render() {
        return <div style={{position:'absolute',width:'100%',height:'100%'}}>
            <Scroller>
               <div className='home'>
                   <div className='home-item'><a href="/phoneverify">手机验证码</a></div>
                   <div className='home-item'><a href="/modal">弹出层</a></div>
                   <div className='home-item'><a href="/switchtabs">switchtabs,切换显示</a></div>
                   <div className='home-item'><a href="/switchtabs">switchtabs,切换显示</a></div>
                   <div className='home-item'><a href="/iscroll">iscroll</a></div>
                   <div className='home-item'><a href="/queue">Queue</a></div>
                   <div className='home-item'><a href="/form">form</a></div>
                   <div className='home-item'><a href="/decorator">decorator</a></div>
                   <div className='home-item'><a href="/charts">charts</a></div>
                   <div className='home-item'><a href="/test">test</a></div>
               </div>
            </Scroller>
        </div>
    }
}
export default  Home