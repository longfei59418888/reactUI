let initState = {
    bankCardList:[],
    defaultBankCard:{}
};

function bankCardInfo(state = initState, action) {
    switch (action.type) {
        case "ADD_BANK_CARD":
            var newState = Object.assign({}, state,{ bankCardList:state.bankCardList.push(action.data)});
            return newState;
        case 'GET_BANK_CARD_LIST':
            return Object.assign({}, state,{bankCardList:action.data});
        case 'SET_DEFAULT_BANK_CARD':
            return Object.assign({}, state,{defaultBankCard:action.data});
        default:
            return state;
    };
};

export default bankCardInfo;