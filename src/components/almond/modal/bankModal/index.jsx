import React from 'react';
import './index.scss';

export default function BankModal(props){
    let {title="弹出层",children,show=true,onMaskClick,onClose} = props;
    return <div className={`bank-modal ${show?'show':''}`}>
        <div onClick={onMaskClick} className="mask"></div>
        <div className="modal">
            <div>
            <h1>{title}</h1>
            <div className="body">
                {children}
            </div>
            <div onClick={onClose} className="foot">关闭</div>
            </div>
        </div>
    </div>
}