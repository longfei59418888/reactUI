import React from 'react';
import Storage, {get,set,clear,remove } from 'xl_storage/lib/index'
// import {error} from '../util/pc/toast'
import {comfirm} from '../util/pc/common'

export default class Main extends React.Component {
    componentDidMount(){
        // set('lll',{test:1,sdfs:3},5)
        // // remove('lll')
        // var storage =  new Storage('wwww')
        // storage.set('ddd',{sdfs:34},10)
        // storage.set('dd',130,5)
      comfirm({
        title:'3',
        message:'efdsf'
      })
    }
    render() {
        return (
            <div style={{padding:30,fontSize:30}}>
              aaaaafsdfasdfsd
            </div>
        )
    }
}

