import React from 'react';
import ReactDOM,{render} from 'react-dom';
import style from './index.scss'

class Btn extends React.Component{
    constructor(){
        super();
        this.loop = null;
    }
    click=()=>{
        clearTimeout(this.loop)
        this.loop = setTimeout(()=>{
            this.props.onClick()
        },300)
    }
    render(){
        return (<p onClick={this.click}></p>)
    }
}
export default Btn