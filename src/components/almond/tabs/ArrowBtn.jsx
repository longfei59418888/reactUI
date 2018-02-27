import React from 'react';
import style from './index.scss'
import arrowIcon from './images/am-arrow-down.png'
// import selectFalse from './images/am-select-btn1.png'
// import selectTrue from './images/am-select-btn2.png'
import classname from 'classnames'

export function ArrowBtn (props) {
    return (<img style={props.style} className={classname('am-arrow-switch',props.show?'action-up':'')}
                 src={arrowIcon} alt=""/>)
}

// export function ChooseBtn (props) {
//     return (<img style={props.style} className={classname('am-arrow-switch',props.show?'action-up':'')}
//                  src={arrowIcon} alt=""/>)
// }