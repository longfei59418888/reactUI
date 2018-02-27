import React from 'react';
import './index.scss';

export default function Radio(props){
    return <div className='am-radio'>
        <input key={1} {...props} type="checkbox" />
        <div className="bg" />
    </div>
}