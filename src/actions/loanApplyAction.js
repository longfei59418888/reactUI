import urlConfig from "./urlConfig";
import {fetchJson,phpAjax,matrixAjax} from "../utils/fetch";

const fetchDate={
    noCredentials: true,
    type:'post'
}
function initLoanApplyDate(){
    return {
        type:'UPDATE_LOAN_APPLY_DATA',
        data:{
            fundCode:null,//资金方code
            fundName:'', //资金方名称
            installmentRate:'',//利率
            loanAmount:'',//借款金额
            installmentNo:12,//借款期数 【默认12个月】
            loanWayName:'现金借款',
            loanWayCode:1, // 1 现金借款, 2 信用卡借款[n] 【默认现金借款】
            loanPupose:1,//现金借款  【默认个人日常消费】
            loanPuposeName:'个人日常消费',//借款用途[n]
            bankCode:'',// 借款卡Code
            cardNo:'',// 借款卡卡号
            bankCardNo:'',// 借款卡卡号
            used:'',// 卡用途
            cardType:'',// 卡类型
            bankName:'', //银行卡名称 [n]
            backIcon:'', //银行卡图标 [n]
            isGreatContract:false, //是否同意合同 [n]
            loadApplyDataIng:false,
        }
    }
}

export default {
    /*
    * 初始化借款查询字段
    * */
    initLoanApplyDate,
    /*
    * 修改借款查询字段
    * */
     updateLoanApplyData(data){
        return  function (dispatch) {
            var promise = new Promise((resolve,reject)=>{
                dispatch({
                    type:'UPDATE_LOAN_APPLY_DATA',
                    data:data
                })
                resolve()
            })
            return promise
        }
    },
    /*
    * 申请借款
    * */
    applyLoan(data,bak){
        matrixAjax({
            data:data,
            url:urlConfig.loanApply,
            success:function (data) {
                if(bak) bak(data)
            }
        })
        return initLoanApplyDate()
    },
    //借款前发送手机验证码 &&  验证码手机验证码 ok
    sendVerifyCode(data,success) {
        if(data.vertCode){
            phpAjax(Object.assign({},fetchDate,{
                success,
                url:urlConfig.verifyPhoneCode,
                data:data,
            }))
            return {type:'',data:{}}
        }
        phpAjax(Object.assign({},fetchDate,{
            success,
            url:urlConfig.sendVerifyCode,
            data:data,
        }))
        return {type:'',data:{}}
    },
    //得到授信额度 ok
    getCreditAmount(){
        return function (dispatch,getStore) {
            matrixAjax({
                url:urlConfig.queryCreditInfo,
                success:function (data) {
                    console.log(data)
                    dispatch({
                        type:'UPDATE_CARD_ADMIN_STATE',
                        data:{'credit':data}
                    })
                }
            })
        }
    },
    //获取资金方 ok
    getFundList(bak){
        return async function (dispatch,getStore) {
            matrixAjax({
                url:urlConfig.queryFundList,
                success:function (data) {
                    console.log('获取资金方',data)
                    dispatch({
                        type:'UPDATE_CARD_ADMIN_STATE',
                        data:{'configFundList':data.debug?data.list:data}
                    })
                    if(bak) bak()
                }
            })
        }
    },
    //试算列表 ok
    getLoanTrialList(data){
        return function (dispatch,getStore) {
            matrixAjax({
                url:urlConfig.loanTrial, data,
                success:function (data) {
                    dispatch({
                        type:'UPDATE_CARD_ADMIN_STATE',
                        data:{'loanTrialList':data.repayPlanList}
                    })
                }
            })
        }
    },
    // 得到银行卡列表
    getBankCardList(bak){
        return function (dispatch,getStore) {
            matrixAjax({
                url:urlConfig.userBindCardList,
                success:function (data) {
                    dispatch({
                        type:'GET_BANK_CARD_LIST',
                        data:data.debug?data.list:data
                    })
                    if(bak) bak()
                }
            })
        }
    },
    //设置默认银行卡
    setDefaultBankCard(data){
        return {
            type:'SET_DEFAULT_BANK_CARD',
            data:data
        }
    }
}
