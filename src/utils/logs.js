import promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
promise.polyfill();

export const fetchLogs = (options) => {
  let { url,  data, ...others } = options;
  let opts = {
    ...others,
    method: 'POST',
    headers: {
      'X-Avoscloud-Application-Id': 'NIOz3IxShfIh0flASQ94C4EJ-gzGzoHsz',
        'X-Avoscloud-Application-Key':'KFEiJEXzBaDNYOQhYWsUHEA1',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  if (['POST', 'PUT'].indexOf(opts.method.toUpperCase()) >= 0) {
    let _data = Object.assign({},data,{ 
      openid :(sessionStorage.getItem("multoken")||''), //token
      ENV :location.origin, //环境 - 从域名来区分
      userAgent : navigator.userAgent,
      all_cookie : document.cookie,
      url : location.href
    });
    opts.body = JSON.stringify(_data);
  };
  fetch("https://leancloud.cn/1.1/classes/"+`${url}`, opts);
};

// 异常日志上报  
export const DebugLogs = (interfaces,detail)=>{
  fetchLogs({
    url:"DEBUG",
    data:{
      interfaces,
      detail
    }
  });
};

// 错误日志上报
export const ErrorLogs = (interfaces,detail)=>{
  fetchLogs({
    url:"ERROR",
    data:{
      interfaces,
      detail
    }
  });
};

