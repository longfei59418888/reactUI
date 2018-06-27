import React from 'react';
import modal from '../util/modal'
import Scroller from '../util/iscroll/index.min'
import CheckBox from '../util/form/checkBox'
require('./index.scss')

export default class Home extends React.Component {

  render() {
       return <div className='form-box'>
           <div className="item">
               <CheckBox after="test"/>
           </div>
       </div>

  }
}