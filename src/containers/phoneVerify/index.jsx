import React from 'react';
import PhoneVerify from '../util/phoneVerify'

export default class Home extends React.Component {
  render() {
       return <div>
           <div style={{border:'1px solid #ccc',margin:'10px'}}><PhoneVerify number='434' ></PhoneVerify></div>
        </div>

  }
}