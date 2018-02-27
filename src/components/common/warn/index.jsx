
import React, { Component, PropTypes } from 'react';

function Warn(props){
    let {
        text,
        ...others
    } = props;
    return <div className="am-warn" {...others}>
        <img  src={require('./images/warn-icon.png')} alt="" className="icon"/>
        <p className="cont">{text}</p>
    </div>
}

export default Warn;