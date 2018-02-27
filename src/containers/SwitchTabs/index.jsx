import React from 'react';
import SwitchTabs from '../util/SwitchTabs'

export default class Home extends React.Component {
    constructor(){
        super()
        this.state={
            isShow:false
        }
    }
    show = ()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
  render() {
       return <div>
           <p style={{margin:0}} onClick={this.show}>SwitchTabs</p>
           <SwitchTabs show={this.state.isShow}>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
               <div>asdgadfa</div>
           </SwitchTabs>
        </div>

  }
}