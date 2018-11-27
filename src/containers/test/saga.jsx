import React from 'react';
import './index.scss';
import { connect } from "../../decorators";
import userInfo from "../../reducers/userInfo";
import { dis } from 'react-redux'
import { changeInfo } from "../../reducers/actions/saga";

@connect(['userInfo'],{changeInfo})
export default class Main extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div style={{padding:40,fontSize:20}}>
                <button onClick={()=>{
                    this.props.changeInfo({isLogin:1+this.props.userInfo.isLogin})
                }}>test</button>
                <p>{this.props.userInfo.isLogin}</p>
            </div>
        )
    }
}














