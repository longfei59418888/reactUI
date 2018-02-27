let initState = {
    indexActiveTab: 0,
    name: "自助卡1管理后台1222",
    loanList: [
        {}, {}, {}, {}, {}
    ],
    credit: {
        creditStatus: 0, // Integer	授信状态  0 未授信 1 审核中 2 授信成功 3 授信失败
        creditAmount: 0, //BigDecimal	授信额度，成功必填
        availableAmount: 0, //BigDecimal	可用额度，成功必填
        effectiveDate: '', //String	生效日期，成功必填 格式2017-12-29 00:00:00
        expireDate: '', //String	失效日期，成功必填 格式2017-12-29 00:00:00
        creditRetryDays: '', //Integer	授信失败间隔时间，失败必填
    },
    user: {
        accessStep: '', // ///准入步骤 0 未认证 1 已实名认证 2 填写资料 3 已绑卡
        isOverdue: '', //是否有逾期 0 是 1 否
        isLoaning: '', //是否有借款处理中 0 是 1 否
        creditStatus: '', //授信状态0 未授信 1 授信中 2 通过 3 失败 4 失效
        reMainingDay: '', //黑暗期 授信失败再次授信倒数天数 授信失败的情况下必填
    },
    wxUserInfo: {},
    idCard: {
        userName:'', //String(25)	姓名	Y
        certNo:'', //	String(18)	身份证号	Y
        certOrderNo:'', //String(64)	身份证OCR订单ID	Y
        certAddress:'', //String(50)	身份证地址	N
        certExpireDate:'', //String(10)	身份证有效期	N
        back_photo_path: '',
        front_photo_path: '',
        // userName : '', // 姓名 certNo : '', //身份证 orderNo : '1', //身份证OCR订单ID
        // certAddress : '', //身份证地址 certExpireDate : '', //身份证有效期
    },
    personal: {
        monthSalary: '',
        monthSalaryLabel: '',
        //Integer	收入情况 0： 无 1： 0到3000 2：3000到5000 3:  5000到8000 4:  8000以上
        // linkInfo : {
            chanlinkName1: '', //linkInfo	String(25)	紧急联系人1姓名
            linkUserMobile1: '', //linkInfo	String(11)	紧急联系人1手机号码
            chanlinkName2: '', //linkInfo	String(25)	紧急联系人2姓名
            linkUserMobile2: '', //linkInfo	String(11)	紧急联系人2手机号码
        // },
        // address : {
            longitude: '', //address	String	经度
            latitude: '', //address	String	纬度
            liveAddress: '', //address	String	居住省份
            addressPrin: '', //address	String	居住城市
            addressCity: '', //address	String	居住区域
            addressDist: '', //address	String	居住详细地址
            lbsAdress: '', //address	String	定位地址
        // },
        
        addInfo: '', //String	附加信息 json字符串用于扩展
    },
    bankCard: {
        bankCardNo: '', //cardInfo	String	银行卡号	Y
        cardPhone: '', //cardInfo	String	银行卡预留手机号	Y
        used: '', //cardInfo	 Integer	卡用途   1-放款
        // 2-还款	Y transType:		Integer	交易类型 1-发送验证码 2-绑卡	Y mobileMessage : '',
        // String	验证码	C transType为2，且获取验证码同步返回0时必传 返回参数 名称	数据类型	说明	必填
        // accessStep	Integer	已完成步骤： 0, "初始"     1,"实名确认成功"     2, "填写资料"     3, "绑卡"	C
        // 非基础校验失败及系统异常必返回 cardExist	Integer	   卡状态： 0 - 未鉴权OTP、未绑卡，验证码必传     1 -
        // 已经鉴权OTP，未绑卡，不用验证码，直接绑卡     2 - 已绑卡         C 获取验证码时，非基础校验失败及系统异常必返回
    },

    live: {
        faceOrderNo: '', //人脸识别订单号
        creditApplyNo: '', //申请单号
        applyStatus: '' //申请状态  1：审核中  2：审核成功  3：审核失败
    },

    configFundList:null,//资金方列表
    loanTrialList:[], //还款试算列表
    LoadApplyData:{
        fundCode:null,//资金方code
        fundName:'', //资金方名称
        installmentRate:'',//利率
        loanAmount:'',//借款金额
        installmentNo:12,//借款期数 【默认12个月】
        loanWayName:'现金借款',
        loanWayCode:1, // 1 现金借款, 2 信用卡借款[n] 【默认现金借款】
        loanPupose:1,//借款用途  【默认信用卡还款】
        loanPuposeName:'个人日常消费',//借款用途[n]
        bankCode:'',// 借款卡Code
        cardNo:'',// 借款卡卡号
        bankCardNo:'',// 借款卡卡号
        cardType:'',// 卡类型
        bankName:'', //银行卡名称 [n]
        backIcon:'', //银行卡图标 [n]
        isGreatContract:false, //是否同意合同 [n]
        loadApplyDataIng:false,

    }
};

function cardAmind(state = initState, action) {
    switch (action.type) {
        //更新实名认证
        case "UPD_APPLY_IDCARD":
            var newVal = Object.assign({}, state.idCard, action.data);
            return Object.assign({}, state, {idCard: newVal});
        //跟新基本信息表单
        case "UPD_APPLY_IMFORMATION":
            var personal = state.personal;
            var newPersonal = Object.assign({}, state.personal, action.data);
            return Object.assign({}, state, {personal: newPersonal});
        case "UPDATE_CARD_ADMIN_STATE":
            var newState = Object.assign({}, state, action.data);
            return newState;

        case 'UPDATE_LOAN_APPLY_DATA': //更新借款申请信息
            return Object.assign({}, state, {
                LoadApplyData: Object.assign({}, state.LoadApplyData, action.data)
            })
        case 'UPDATE_USER_INFO': //更新个人信息
            return Object.assign(state, {
                user: Object.assign(state.user, action.data)
            })
        default:
            return state;
    };
};

export default cardAmind;