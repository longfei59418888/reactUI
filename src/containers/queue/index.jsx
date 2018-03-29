import React from 'react';
import './index.scss'
import classnames from 'classnames'
import Queue from '../util/queue'
class Comp extends React.Component {
    constructor() {
        super();
    }

    render() {

        return     <Queue style={{height:50}}>
           <div style={{height:40}}>asdfas</div>
           <div style={{height:40}}>asadsfasdffas</div>
           <div style={{height:40}}>asdadsfasdffas</div>
        </Queue>
    }
}
export default Comp