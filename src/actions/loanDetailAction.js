export default {

    loanDetailState(attr, value) {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOAN_DETAIL_STATE',
                data: {
                    [attr]: value
                }
            });
        }
    },
    loanListState(attr, value) {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOAN_LIST_STATE',
                data: {
                    [attr]: value
                }
            });
        }
    }
};
