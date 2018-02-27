import  './index.scss';
import React, {Component} from "react";
import arrowImage from './images/arrow.png'

export function InfoList(props) {
    const {
        title,
        titleTips,
        cont,
        contTips,
        contState,
        link,
        className,
        ...others
    } = props;
    const arrowNode = link
        ? <img src={arrowImage} alt="" className="arrow"/>
        : '';
    const titleNode = title
        ? <p className="title">{title}</p>
        : '';
    const titleTipsNode = titleTips
        ? <p className="title-tips">{titleTips}</p>
        : '';
    const contNode = cont
        ? <p className="cont">{cont}</p>
        : '';
    const contTipsNode = contTips
        ? <p className="cont-tips">{contTips}</p>
        : '';
    const contStateNode = contState
        ? <p className="cont-state">{contState}</p>
        : '';
    const addClass = className
        ? className
        : '';

    return <a className={"am-infolist-box " + addClass} href={link} {...others}>
        <div className="title-box">
            {titleNode}
            {titleTipsNode}
        </div>
        <div className="cont-box">
            {contNode}
            {contStateNode}
            {contTipsNode}
        </div>
        {arrowNode}
    </a>
}

export function InfoTable(props) {
    const {amount,name} = props;

    return <div className="am-repayment-info-table">
        <div className="head">
            <p className="title">{name}</p>
            <h2 className="amount">{amount}</h2>
        </div>
        <div className="info-body">
            {props.children}
        </div>
    </div>
}

export function InfoTableList(props) {
    const {
        name,
        cont,
        link,
        onClick,
        ...others
    } = props;

    let contNode = link
        ? <a onClick={()=>{onClick()}} className="cont" href={link}>{cont}</a>
        : <p className="cont">{cont}</p>;

    return <div className="list">
        <p className="name">{name}</p>
        {contNode}
    </div>
}


