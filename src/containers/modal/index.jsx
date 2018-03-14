import React from 'react';
import modal from '../util/modal'
import Scroller from '../util/iscroll/index.min'

export default class Home extends React.Component {
    toast(){
    }
  render() {
       return <div style={{fontSize:16,lineHeight:6,textAlign:'center'}}>
          <p  onClick={()=>{modal.show('bottom',<Test toast={this.toast}/>
              ,function (com) {
              console.log(com)
          })}}>弹出modal-bottom</p>
          <p onClick={()=>{modal.show('left',<div  onClick={()=>{modal.close()}} style={{fontSize:26,lineHeight:6,textAlign:'center',background:'#ccc',height:'100%'}}>关闭</div>)}}>弹出modal-left</p>
          <p onClick={()=>{modal.show('right',<div onClick={()=>{modal.close()}} style={{fontSize:26,lineHeight:6,textAlign:'center',background:'#ccc',height:'100%'}}>关闭</div>)}}>弹出modal-right</p>
           <p>modal.show(direction,Component,callbak):  direction-方向，Component-组件,callbak(modal)</p>
           <p>modal.close()</p>
       </div>

  }
}
class Test extends React.Component{
    test=()=>{
        this.props.toast()
    }
    render(){
        return(
            <div ref='sdf' style={{fontSize:26,lineHeight:6,textAlign:'center',background:'#ccc',height:'100%'}}>
                <Scroller>
                    <p onClick={()=>{modal.close();this.test()}} >关闭</p>
                </Scroller>
                </div>
        )
    }
}