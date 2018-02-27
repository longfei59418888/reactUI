import style from './index.scss'
import react from 'react'
import classnames from 'classnames'
/*
* 贷款中 Item
* */
export function ItemLoanIng(props) {
    let {title,children,noRight,icon,...others} = props;
    return (<div className={classnames('an-item-loan-ing',props.className)} onClick={()=>{
        props.onClick?props.onClick():'';
    }}>
           <div style={props.style} className='an-item-loan-box'>
               <p className='title'>{title}</p>
               <div className="an-item-loan-item">{children}</div>
               {noRight?'':icon?<div className='an-item-loan-icon'>{icon}</div>:<div className="za-cell-arrow"></div>}
           </div>
    </div>)
}