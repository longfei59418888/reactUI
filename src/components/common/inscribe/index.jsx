import './index.scss';
import React, {Component} from "react";

function Inscribe(props) {
    const {
        text,
        ...others
    } = props;

    return <p className="am-inscribe" {...others}>{text}</p>
}

export default Inscribe;