import promise from 'es6-promise'
import fetch from 'isomorphic-fetch';
import StaticToast from 'components/common/toast'
import {
  DebugLogs,
  ErrorLogs
} from 'src/utils/logs';
promise.polyfill();

export function matrixAjax(options) {
    options.url = /^https:\/\/|^http:\/\//.test(options.url) || /^\/\//.test(options.url) ?
        options.url :
        CONSTS.MATRIX_URL + options.url;
  let {
    url,
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    type = 'post',
    data,
    success
  } = options;
  try {
    var encryptData = Crypto.encrypt(data);
    var AES_KEY = encryptData.AES_KEY;
    delete encryptData.AES_KEY;

    fetchJson({
      url: url,
      encrypt: true,
      headers,
      encryptData,
      AES_KEY,
      type,
      body: JSON.stringify(encryptData),
      success
    })
  } catch (e) {}
}

/**
 * 发起json形式的fetch请求
 * @param {Object} options
 */

export const fetchData = async function (options) {
    options.url = /^https:\/\/|^http:\/\//.test(options.url) || /^\/\//.test(options.url) ? options.url :
        DEPLOY_ENV + options.url;
    Loading(true);
    await fetch(options.url, options).then(resData => {
        if (resData.status >= 400) {
            return {code:'0001',description:'网络错误'}
        }
        return resData.json()
    })
}

export const fetchJson = (options) => {

  options.url = /^https:\/\/|^http:\/\//.test(options.url) || /^\/\//.test(options.url) ?
    options.url :
    DEPLOY_ENV + options.url;
  let {
    url,
    mode = 'cors',
    type,
    data,
    body,
    headers,
    noCredentials,
    credentials,
    ...others
  } = options;
  Loading(true);
  let opts = {
    ...others,
    mode,
    method: type || 'get',
    _url: url,
    // credentials: 'include',
    headers: headers ?
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }

  if (noCredentials) {
    delete opts.credentials;
  }

  if (['post', 'put'].indexOf(opts.method) >= 0) {
    opts.body = body ?
      body :
      JSON.stringify(data || {});
  };

  fetch(url, opts).then(resData => {
    return toJson(resData, opts)
  })
    .then(resData => resHandler(resData, opts))
    .catch(error => errorHandler(error, opts))
}

function toJson(resp, options) {

  if (resp.status >= 400) {
    return errorHandler(null, options, resp.status)
  }
  return resp.json()
}

// 请求成功处理
function resHandler(resData, options) {
  Loading(false);
  if(typeof resData ==='string'){
    resData = JSON.parse(resData)
  }

  let {
    errorCode,
    message,
    respCode,
    respMessage
  } = resData;
  
  
  if (errorCode !== undefined) { //php接口
    if (errorCode === 0) {
      options.success && options.success(resData);
    } else if (errorCode === 1) {
      //重新认证
      auth();
    } else {
      StaticToast.error(message);
      DebugLogs(options._url, resData);
    }
    // if (resData.status && resData.status != 200) {   return
    // errorHandler(resData.error, options, resData.status); } if (!resData ||
    // resData.code > 20000) {   options.error && options.error(resData);
    // StaticToast.error(resData.message); } else { }; if (resData.code != 0) {
    // //code！=0 的异常上报   DebugLogs(options._url, resData); };
  } else { //JAVA接口
    if (respCode === '0000') {
      if (options.encrypt) {
        var {
          AES_KEY
        } = options;
        if (resData.respContent) {
          // sign不为空时验签
          if (resData.sign) {
            var ver = Crypto.verify(resData.sign, AES_KEY)
            //验签成功
            if (ver) {
              var result = Crypto.decrypt(resData.respContent, AES_KEY)
              options.success && options.success(result);
              //验签失败
            } else {
              console.log('验签失败')
            }
            //签名为空
          } else {
            console.log('签名为空')
          }
        } else {
          console.log('返回报文为空')
        }
        //解密参数，验签
        //先验签名，
      }
    } else {
      StaticToast.error(respMessage);
      DebugLogs(options._url, resData);
    }
  }


}

// 异常处理
function errorHandler(error, options, status) {
  options.error && options.error(error);
  StaticToast.error(`网络异常，请稍后重试(${status})`);
  Loading(false);
  ErrorLogs(options._url, {
    status,
    error
  });
}

export function Loading(IsShow) {
  var loading = document.querySelector('#loadTips');
  if (!loading && !IsShow) {
    return;
  };
  if (loading) {
    loading.className = !IsShow ?
      "wb-fix hide" :
      "wb-fix";
  } else {
    var str = '<div class="ui-loading ui-loading-open" ><div class="ui-loading-container"><div ' +
      'class="ui-loading-items" ><div class="ui-loading-item" ></div><div class="ui-loa' +
      'ding-item" ></div><div class="ui-loading-item" ></div><div class="ui-loading-ite' +
      'm" ></div><div class="ui-loading-item" ></div><div class="ui-loading-item" ></di' +
      'v><div class="ui-loading-item" ></div><div class="ui-loading-item" ></div><div c' +
      'lass="ui-loading-item" ></div><div class="ui-loading-item" ></div><div class="ui' +
      '-loading-item"></div><div class="ui-loading-item"></div></div></div><div class="' +
      'ui-mask transparent"></div></div>';
    var CreateLoad = document.createElement("div");
    CreateLoad.id = "loadTips";
    CreateLoad.className = !IsShow ?
      "wb-fix hide" :
      "wb-fix";
    CreateLoad.innerHTML = (str);
    document
      .body
      .appendChild(CreateLoad);
  };
};