import React from 'react';
import ReactDOM,{render} from 'react-dom';
import style from './index.scss'
import no from './select-no.png'
import yes from './select-yes.png'
import classnames from 'classnames'
import actions from 'src/actions/userInfo'
import { defaultProps , loading, login, connect, setTitle, autobind} from 'src/decorators'



<<<<<<< HEAD
// @iscroll()
// @transition()
@defaultProps({select:'dsf'})
@connect(state=>{
    let { userInfo } = state
    return { userInfo }
},dispatch=>{
    return bindActionCreators(actions,dispatch)
})
=======
console.log(store)
@setTitle('test')
@defaultProps({select:false})
@connect(['userInfo'],actions)
>>>>>>> 664ac910d4977a9b5538413da1f8bb84d2b9e5e6
@loading(async (props,state)=>{
    let userinfo = props.getUserInfo()
    await Promise.all([userinfo]);

})
@login()
export default class Btn extends React.Component{
    constructor(props){
        super();
        this.state={
            select:props.select && true
        }
    }
    @autobind
    change(){
        if(this.props.change) this.props.change(!this.state.select)
        this.setState({
            select:!this.state.select
        })
    }
    render(){
        let { className,style} = this.props
        return(
            <div  className={classnames('wxl_common_form_checkbox',className)}
                  style = {style}
                  onClick={()=>{
                    this.change()
            }} >
                <img src={this.state.select?yes:no} alt=""/>
                <p>{this.props.after}</p>
            </div>
        )
    }
}

