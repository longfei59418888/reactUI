
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

// 用于操作的数据逻辑的 action
function* fetchData(action) {
    try {
        // const data = yield call(Api.fetchUser, action.payload.url);
        console.log(action)
        yield put({type: "SET_USER_INFO", data:action.data});
    } catch (error) {
        yield put({type: "FETCH_FAILED", error});
    }
}


// 用于监听的action
function* watchFetchData() {
    yield* takeEvery('FETCH_REQUESTED', fetchData)
}


// 用于绑定到 组件上的 acton
export function changeInfo(data) {
    return {
        type:'FETCH_REQUESTED',
        data
    }
}


export default watchFetchData;
