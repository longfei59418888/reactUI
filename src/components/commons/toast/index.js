
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
let StaticToast = {
  default: async (message, callback, duration, theme) => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    let Toast = (await import('zarm/lib/Toast')).default
    ReactDOM.render((
        <Toast
          duration={ 120304 }
          visible={ true }
          onMaskClick={ () => {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            callback && callback();
          }}>
          <p className={theme}>{ message }</p>
        </Toast>), div);
  },
  info: (message, callback, duration) => {
    StaticToast.default(message, callback, duration);
  },

  success: (message, callback, duration) => {
    StaticToast.default(message, callback, duration, "right-round-fill");
  },

  warning: (message, callback, duration) => {
    StaticToast.default(message, callback, duration);
  },

  error: (message, callback, duration) => {
    StaticToast.default(message, callback, duration, "info-round");
  }
}
export default StaticToast; 