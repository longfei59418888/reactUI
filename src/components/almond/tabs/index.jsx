import React from 'react';
import style from './index.scss'

export function Tabs  (props) {
    let { tabs ,index  ,...others} = props
    return (
        <div {...others} className='am-person-tabs'>
            <div className="am-person-tabs_null"></div>
            <ul>
                {tabs.map((tab,i)=>{
                    return (
                        <li className={index==i?'active':''} onClick={()=>{
                            tab.onclick()
                        }}>
                            <img src={tab.icon} alt=""/>
                            <p>{tab.title}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
