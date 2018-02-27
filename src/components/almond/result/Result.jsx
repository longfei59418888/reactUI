import React from 'react';
import style from './index.scss'
import ErrorImage from './images/error.png'
import IngImage from './images/resault-ing.png'


export function Result(props) {
    let {title,description,status,...others} = props;
    let img = IngImage
    if(status != 'ING')  img = ErrorImage
    return <div className='am-result-error' {...others}>
        <img src={img} alt=""/>
        <p>{title}</p>
        <div>{props.children}</div>
    </div>
}
