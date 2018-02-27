import React from 'react';
import classnames from 'classnames';
import './index.scss';

export function AmHead(props){
    let {children} = props;
    return <div className="am-panel--head">
    {children}
  </div>
}

export function AmBody(props){
    let {children} = props;
    return <div className="am-panel--body">
    {children}
  </div>
}

export function AmFoot(props){
    let {children} = props;
    return <div className="am-panel--foot">
    {children}
  </div>
}

export function AmPanel(props){
    let {children} = props;
  return <div className="am-panel">{children}</div>
}

// module.exports = {
//     AmPanel,
//     AmBody,
//     AmHead,
//     AmFoot
// }