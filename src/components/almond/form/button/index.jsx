import React from 'react';
import './index.scss';
import classnames from 'classnames'
export default function Button(props){
  let {text,className,...others} = props;
  return <button type="text" {...others} href="javascript:;"
                 className={classnames("am-button",className)}>{text}</button>
}
