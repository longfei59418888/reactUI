import React from 'react';
import './index.scss';
import {matrixAjax} from 'utils/fetch';
import StaticToast from 'components/common/toast'




export default class CodeInput extends React.Component{
    constructor(){
        super();
        this.state = {
            time : 0
        }
    }
    countDown(){
        this.setState({time: 60});
        this.timer = setInterval(()=>{
            if(this.state.time > 0){
                this.setState({
                    time :  --this.state.time
                            })
            }else{
                clearInterval(this.timer);
            }
            
        },1000)
        
    }
    componentWillUnmount = () => {
        if(this.time)clearInterval(this.timer);
    }
    
    getCode(){
        matrixAjax({
            url : 'SZXXR/accountApi/bindCard',
            data : {
                cardInfo : {
                    bankCardNo : '3214836553686581',
                    cardPhone : '15818556481',
                    IsDefault : 1,
                },
                transType : 1
            },
            success : (res)=>{
                if(res.code=="0000"){
                    this.countDown();
                }else{
                    StaticToast.error(res.respMessage);
                }
            }
        })
    }
    render(){

        let {time} = this.state;
        let {label,ref,...others} = this.props;
        return <div className="code-input">
            <label htmlFor="">{label}</label>
            <input type="number" ref={ref} placeholder="请输入验证码" maxLength="6" />
            <button type="button" onClick={this.getCode.bind(this)} disabled={time>0}>{time>0?`${time}后重试`:'获取验证码'}</button>
        </div>
    }
}