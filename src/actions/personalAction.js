export default {

    updAddBankCardState(attr, value) {
        return (dispatch, getState) => {
            dispatch({
                type: 'PERSONAL_ADDBANKCARD',
                data: {
                    [attr]: value
                }
            });
        }
    }
};
