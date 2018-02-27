import React from 'react';
import './index.scss';
export default function tips(props){
    let {text} = props;
    return <div className="am-tips"><p>{text}</p></div>
}

function TableTitle(props){
    let {text} = props;
    return <div className="am-table-title"><p>{text}</p></div>
}

export {
    TableTitle
} 