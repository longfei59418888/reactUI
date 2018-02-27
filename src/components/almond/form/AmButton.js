import React from 'react';
import './index.scss';
export default function AmButton(props){
  let {text,...others} = props;
  return <a {...others} href="javascript:;" className="am-button">{text}</a>
}
