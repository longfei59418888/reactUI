import React from 'react';
import style from './index.scss'

class Comp extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){
        this.contentHeight = this.refs.tabs_content.offsetHeight
    }
    componentDidUpdate(){
        this.contentHeight = this.refs.tabs_content.offsetHeight
    }
    render(){
        let props = this.props
        return <div style={{height:props.show?this.contentHeight:0}} className='am-switch-tabs'>
            <div  ref='tabs_content' className="am-switch-tabs_content">{props.children}</div>
        </div>
    }
}
export default Comp
