import {
  matrixAjax,
  phpAjax,
  getPCAByBaiduApi,
  idCardScan,
  liveScan,
  bankCard
} from 'utils/fetch';
import {isMobile, isIdCard,isEmpty, isChName} from 'utils/validate';
import StaticToast from 'components/common/toast'
import loadJS from 'utils/loadJS';
import Storage from 'utils/storage';

var DEBUGGER = 1;

var STORE = new Storage();

function idCardValidate({userName,certNo}){
  if(isEmpty(userName)){
    return '请输入真实姓名'
  }else if(!isChName(userName)){
    return '请输入中文姓名'
  }else if(isEmpty(certNo)){
    return '请输入身份证号'
  }else if(!isIdCard(certNo)){
    return '请输入身份证号'
  }
}

function idCardImformation({
  monthSalary,
  addressDist,
  certNochanlinkName1,
  linkUserMobile1,
  chanlinkName2,
  linkUserMobile2}){
  if(isEmpty(addressDist)){
    return '请输入详细地址'
  }else if(false){

  }
  
  else if(!monthSalary){
    return '请选择月收入'
  }else if(certNo==''){
    return '请输入身份证号'
  }else if(!isIdCard(certNo)){
    return '请输入身份证号'
  }
}

export default {
  queryUserInfo() {
    return (dispatch, getState) => {
      var result = matrixAjax({url: '/XR/creditUserAPI/queryUserInfo'})
      dispatch({type: 'UPDATE_CARD_ADMIN_STATE_LOAN_LIST', data: {
          list
        }})
    };
  },
  isBindCard(){

  },
  updateIdCard(data){
    return (dispatch,getState)=>{
      dispatch({type: 'UPD_APPLY_IDCARD', data})
    }
  },
  /**
   * 保存个人身份证
   */
  saveIdCard(){
    
    return (dispatch,getState)=>{
      let {
        certAddress,
        certExpireDate,
        certNo,
        certOrderNo,
        userName,
      } = getState().cardAdmin.idCard;
      var err = idCardValidate({certNo,userName});
      if(err){
        StaticToast.error(err);
        return;
      }
      debugger;
      matrixAjax({
        url : 'SZXXR/accountApi/authName',
        data : {
          certAddress,
          certExpireDate,
          certNo,
          certOrderNo,
          userName,
          openid : STORE.get('OPENID')
        },
        success : (res)=>{
          debugger;
          return ;
          window.location.replace('/almond/apply/imformation');
        }
      })
    }
  },

  /**
   * 个人资料认证
   */
  saveImformation(){
    return (dispatch, getState) => {
      var {monthSalary,
            chanlinkName1,
            linkUserMobile1,
            chanlinkName2,
            linkUserMobile2,
            longitude,
            latitude,
            liveAddress,
            addressPrin,
            addressCity,
            addressDist,
            lbsAdress,
            addInfo,} = getState().cardAdmin.personal;
      
      matrixAjax({
        url : 'SZXXR/accountApi/profileFill',
        data : {
          monthSalary,
        //Integer	收入情况 0： 无 1： 0到3000 2：3000到5000 3:  5000到8000 4:  8000以上
        linkInfo : {
            chanlinkName1, //linkInfo	String(25)	紧急联系人1姓名
            linkUserMobile1, //linkInfo	String(11)	紧急联系人1手机号码
            chanlinkName2, //linkInfo	String(25)	紧急联系人2姓名
            linkUserMobile2, //linkInfo	String(11)	紧急联系人2手机号码
        },
        address : {
            longitude, //address	String	经度
            latitude, //address	String	纬度
            liveAddress, //address	String	居住省份
            addressPrin, //address	String	居住城市
            addressCity, //address	String	居住区域
            addressDist, //address	String	居住详细地址
            lbsAdress, //address	String	定位地址
        },
        addInfo, //String	附加信息 json字符串用于扩展
        },
        success : (res)=>{
          if(res.respCode ==='0000'){
            window.location.replace('/almond/apply/bankCard')
          }else{
            StaticToast.error(res.respMessage);
          }
          debugger;
        }
      })
      // dispatch({type: '', data: {}})
    }
  },
  saveBankCardInfo(mobileMessage=123123){
    debugger;
    return (dispatch, getState) => {
      let { 
        bankCardNo, //cardInfo	String	银行卡号	Y
        cardPhone, //cardInfo	String	银行卡预留手机号	Y
        used} = getState().cardAdmin.bankCard;
      matrixAjax({
        url : 'SZXXR/accountApi/bindCard',
        data : {
          cardInfo:{
            bankCardNom,
            cardPhonem,
            used,
          },
          transType :2 ,
          mobileMessage
         },
        success : (res)=>{
          if(res.respCode ==='0000'){

            // window.location.replace('/almond/apply/bankCard')
          }else{
            StaticToast.error(res.respMessage);
          }
          debugger;
        }
      })
    }
  },
  getCreditInfo() {
    return (dispatch, getState) => {
      dispatch({type: '', data: {}})
    }
  },
  getUserInfo() {
    alert('获取用户信息')
  },
  liveScan() {
    return (dispatch, getState) => {
      idCardScan();
    }
  },

  updImformation(data) {
    return (dispatch) => {
      dispatch({type: 'UPD_APPLY_IMFORMATION', data})
    }

  },
  getLocation() {
    return (dispatch, getState) => {
      loadJS('//res.wx.qq.com/open/js/jweixin-1.2.0.js', () => {
        phpAjax({
          url: `api/user/jsApi`,
          data: {
            apis: 'getLocation,openLocation',
            url: location.href
          },
          success: (data) => {

            data = JSON.parse(data.data);
            // data.url = decodeURIComponent(data.url);
            wx.config(data);

            function getLocation() {
              wx.ready(function(){
                wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                  var {latitude, longitude} = res; // 纬度，浮点数，范围为90 ~ -90
                  getPCAByBaiduApi(longitude, latitude, function ({province, city, district, street, street_number}) {
                    dispatch({
                      type: 'UPD_APPLY_IMFORMATION',
                      data: {
                        latitude,
                        longitude,
                        liveAddress: province,
                        addressPrin: city,
                        addressCity: district,
                        addressDist: `${street}${street_number}`,
                        lbsAdress: `${province}${city}${district}${street}${street_number}`
                      }
                    })

                  });
                },
                error: function (res) {
                  alert(JSON.stringify(res))
                  // if(res.errMsg.indexOf('function_not_exist') > 0){     alert('版本过低请升级')   }
                },
                cancel: getLocation

              });
              })
            }
            getLocation();
          }
        })
      })
    }
  },

  getIdCardScanResult(orderNo) {
    return (dispatch, getState) => {
      phpAjax({
        url: 'api/user/getOcrResult',
        data: {
          orderNo
        },
        success(res) {
          var {
            back_photo_path,
            front_photo_path,
            address: certAddress,
            valid_date: certExpireDate,
            order_no:certOrderNo,
            name: userName,
            idcard: certNo
          } = res.data;

          dispatch({
            type: 'UPDATE_CARD_ADMIN_STATE',
            data: {
              idCard: {
                userName, // 姓名
                certNo, //身份证
                certOrderNo, //身份证OCR订单ID
                certAddress, //身份证地址
                certExpireDate, //身份证有效期

              }
            }
          })
        }
      })
    }

  },
  idCardScan() {
    return (dispatch, getState) => {
      idCardScan();
    }
  },
  getIdCardScanInfo() {
    alert('查询身份证扫描结果')
    dispatch({type: '', data: {}})
  },
  getLiveScanInfo() {
    alert('查询活体扫描结果')
    dispatch({type: '', data: {}})
  },
  getBankCardScanInfo() {
    alert('查询身份证扫描结果')
    dispatch({type: '', data: {}})
  },
  isLife() {},
  credit() {},
  saveUserInfo() {
    alert('保存用户信息')

  },
  bankCardScan() {
    alert('银行卡扫描')
  },
  getBindBankCardCode() {
    alert('获取绑定银行卡验证码')
  }
}
