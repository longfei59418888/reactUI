let initState = {
    test:'test'
};

function loanDetail(state = initState, action) {
    switch (action.type) {
        case "LOAN_DETAIL_STATE":
            var newState = Object.assign({}, state, action.data);
            return newState;
        default:
            return state;
    };
};

export default loanDetail;