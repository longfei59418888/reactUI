import {
  matrixAjax,
  fetchJson
} from 'utils/fetch';

var DEBUGGER = 1;

export default {
  queryUserInfo() {
    return (dispatch, getState) => {
      matrixAjax({
        url: 'SZXXR/accountApi/queryUserInfo',
        success: function (res) {
          console.log('res:', res)
          dispatch({
            type: 'UPDATE_USER_INFO',
            data: res
          })
        }
      })
    };
  },
  queryCreditInfo() {
    return (dispatch, getState) => {
      matrixAjax({
        url: 'SZXXR/creditPreApi/queryCreditInfo',
        data: {
          name: 'huangjiehong'
        },
        success: function (res) {
          console.log('res:', res)
          // dispatch({
          //   type: 'UPDATE_CARD_ADMIN_STATE_LOAN_LIST',
          //   data: {
          //     res
          //   }
          // })
        },
        type: 'post'
      })
    };
  },
  getSign() {
    console.log(history);
  },
  getCreditInfo() {
    return (dispatch, getState) => {
      dispatch({
        type: '',
        data: {}
      })
    }
  },
  getUserInfo() {
    alert('获取用户信息')
  },
  idCardScan() {
    alert('去扫描身份证')
  },
  saveIdCard() {
    alert('保存身份证信息')
  },
  getIdCardScanInfo() {
    alert('查询身份证扫描结果')
    dispatch({
      type: '',
      data: {}
    })
  },
  getLiveScanInfo() {
    alert('查询活体扫描结果')
    dispatch({
      type: '',
      data: {}
    })
  },
  getBankCardScanInfo() {
    alert('查询身份证扫描结果')
    dispatch({
      type: '',
      data: {}
    })
  },
  isLife() {},
  credit() {},
  saveUserInfo() {
    alert('保存用户信息')

  },
  bankCardScan() {
    alert('银行卡扫描')
  },
  saveBankCardInfo() {
    alert('保存银行卡信息')

  },
  getBindBankCardCode() {
    alert('获取绑定银行卡验证码')
  }
}