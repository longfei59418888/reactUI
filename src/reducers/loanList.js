let initState = {
    test:'list'
};

function loanList(state = initState, action) {
    switch (action.type) {
        case "LOAN_LIST_STATE":
            var newState = Object.assign({}, state, action.data);
            return newState;
        default:
            return state;
    };
};

export default loanList;