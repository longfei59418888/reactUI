import React from 'react';
// import { Spin, Icon } from 'antd';
// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


export default function loading (props){
  // return <div>123</div>;
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return <div></div>;
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>{`${props.error}! Component failed to load`}</div>;
  } else {
    return null;
  }
}