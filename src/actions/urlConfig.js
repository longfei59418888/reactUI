import CONSTS from 'constants';
const debug = false
let baseUrl = 'http://127.0.0.1:3333/'
// let baseUrl = CONSTS.PHP_URL
const URL_CONFIG = {
    sendVerifyCode:'api/user/sendVerifyCode',  //借款发送手机验证码
    verifyPhoneCode:'api/user/verifyCode',  //借款验证手机号
    getUserInfo:'api/user/userInfo',  //获取微信用户信息

    queryLoanInfo:'SZXXR/creditLoanAPI/queryLoanInfo',
    queryCreditInfo:'SZXXR/creditPreApi/queryCreditInfo',  //授信状态及已授信额度信息
    queryFundList:'SZXXR/LoanPreAPI/queryFundList',  //资金方列表
    loanTrial:'SZXXR/creditLoanAPI/loanTrial',  //试算接口
    loanApply:'SZXXR/creditLoanAPI/loanApply',  //申请借款


    userBindCardList:'SZXXR/accountApi/userBindCardList',  //获取用户绑卡列表
}

let DEBUG_URL_CONFIG =(function () {
    let DEBUG_URL_CONFIG = {}
    for (var i in URL_CONFIG){
        DEBUG_URL_CONFIG[i]=baseUrl+URL_CONFIG[i]
    }
    return DEBUG_URL_CONFIG
})

export default debug? DEBUG_URL_CONFIG():URL_CONFIG