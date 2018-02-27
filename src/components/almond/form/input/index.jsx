import React from 'react';
import classnames from 'classnames';
import './index.scss';
// import {Picker} from 'zarm';
import Loadable from 'react-loadable';
import Loading from 'components/loading'
// function goScan(){
//   alert('调用银行卡ocr')
// }


export default Loadable.Map({
  loader:{
    Picker :() => import('zarm/lib/Picker')
  },
  
  loading : Loading,
  render(loaded,props){
    let {Picker} = loaded;
    Picker  = Picker.default;
    let {label,arrow,type,...others} = props;
    if(type==='bankCard'){
      return <div className='input-item'>
        <label htmlFor="">{label}</label>
        <input {...others}/>
        {/* <div className="scan" onClick={goScan.bind(this)}></div> */}
      </div>
    }
    if(type==='stack'){
      return <div className={classnames("input-item arrow")}>
            <label htmlFor="">{label}</label>
            <Picker.Stack
            {...others}
            />
        </div>
    }
    if(type==='picker'){
      return <div className={classnames("input-item arrow")}>
      <label htmlFor="">{label}</label>
      <Picker {...props}
      />
  </div>
      
      
    }
  return <div className={classnames("input-item",{arrow:arrow})}>
    <label htmlFor="">{label}</label>
    <input {...others}/>
</div>

  }
});

