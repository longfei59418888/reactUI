import React from 'react';
import ReactDOM,{render} from 'react-dom';
import style from './index.scss'
import Scroller from '../util/iscroll/index.min'
class ComContainer extends React.Component{
    constructor(){
        super()
        this.state={
            list:[1,2,3,4,5,6,7,8,9,10,12],
            index:0,
        }
    }
    render(){
        return (<Scroller
            ref="scroller"
            init={{x:0,y:0}}
            leaveBefor={(scroller)=>{console.log(scroller)}}
            onRefresh={(scroller,bak)=>{
                alert('开始刷新')
                setTimeout(()=>{
                    alert('刷新完成')
                    bak(false)
                },3000)
            }}
            onLoadMore={(scroller,bak)=>{
                alert('开始加载')
                setTimeout(()=>{
                    alert('加载完成')
                    bak(true)
                },3000)
            }}
        >
             <div>
                <div className='show-info'>
                    <div style={{height:1}}></div>
                    <h1>Scroller属性：</h1>
                    <p><span>init </span>: {'{x,y}'},传入初始位置。</p>
                    <p><span>leaveBefor </span>: {'(Scroller[当前Scroller组件]'}，离开页面或者注销当前Scroller组件，设置当期滚动的位置</p>
                    <p><span>onRefresh </span>: {'(Scroller,bak[刷新完成函数,true为结束])'},下拉刷新</p>
                    <p><span>onLoadMore </span>: {'(Scroller,bak[当前加载完成函数,true为结束])'},上拉加载</p>
                    <img src={require('./test.png')} alt=""/>
                </div>
                 <ul>
                     {this.state.list.map((item)=>{
                         return <li>{item}</li>
                     })}
                 </ul>
             </div>
        </Scroller>)
    }
}
export default ComContainer