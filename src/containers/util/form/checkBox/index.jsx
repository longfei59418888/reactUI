import React from 'react';
import ReactDOM,{render} from 'react-dom';
import style from './index.scss'
import no from './select-no.png'
import yes from './select-yes.png'
import { autobind } from 'core-decorators'
import classnames from 'classnames'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import actions from 'src/actions/userInfo'
// import { defaultProps } from 'src/decorators'
const defaultProps = function (defaultProps) {
    return function (target) {
        target.defaultProps = defaultProps
    }
}
const loading = function (promise) {
    return function (target) {
        let render = target.prototype.render;
        let componentWillMount = target.prototype.componentWillMount;
        target.prototype.componentWillMount = function () {
            this.setState({
                loading:true
            })
            if(promise) promise(this.props,this.state).then(()=>{
                this.setState({
                    loading:false
                })
            })
            if(componentWillMount) componentWillMount.apply(this)
        }
        target.prototype.render = function () {
            if(this.state.loading) return(<div>loading</div>)
            return render.apply(this)
        }
        return target
    }
}

const login = function () {
    return function (target) {
        let render = target.prototype.render;
        let componentWillMount = target.prototype.componentWillMount;
        target.prototype.render = function () {
            if(!this.props.userInfo || !this.props.userInfo.isLogin){
                return (<div>no login</div>)
            }
            return render.apply(this)
        }
        target.prototype.componentWillMount = function () {

            if(componentWillMount) componentWillMount.apply(this)
        }
    }
}

// @iscroll()
// @transition()
@defaultProps({select:'dsf'})
@connect(state=>{
    let { userInfo } = state
    return { userInfo }
},dispatch=>{
    return bindActionCreators(actions,dispatch)
})
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

