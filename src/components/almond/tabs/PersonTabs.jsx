import React from 'react';
import { Tabs } from  './index'
import PersonLifeDf from './images/default-tabs-life.png'
import PersonLife from './images/default-tabs-life-s.png'
import PersonDf from './images/default-tabs-person.png'
import Person from './images/default-tabs-person-s.png'

export default function PersonTabs  (props) {
    let index = props.index?props.index:0
    console.log(index)
    let tabs=[
        {title:'信用生活',icon:index==0?PersonLife:PersonLifeDf,onclick:function () {}},
        {title:'我的',icon:index==1?Person:PersonDf},
    ]
    return <Tabs {...props} tabs={tabs} index={index}></Tabs>
}