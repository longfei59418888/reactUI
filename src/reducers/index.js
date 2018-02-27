import {combineReducers} from "redux";
import cardAdmin from './cardAdmin';
import bankCardInfo from './bankCardInfo';
import loanDetail from './loanDetail';
import loanList from './loanList';

export default combineReducers({
    cardAdmin,
    bankCardInfo,
    loanDetail,
    loanList
});
  