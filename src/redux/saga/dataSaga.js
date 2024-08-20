import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
const dataApi = (num = 5) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${num}`);
};

function* getDataSaga(action) {
  console.log(action);
  yield put({ type: "loading" });
  try {
    const response = yield call(dataApi, action.count);
    console.log(response);
    if (response.status === 200) {
      yield put({ type: "loaded", data: response.data });
    } else if (action.loadMore === true) {
      yield put({ type: "load_more", data: response.data });
    } else {
      yield put({ type: "failed" });
    }
  } catch (err) {
    console.log(err);
    yield put({ type: "failed" });
  }
}

export function* watchGetDataSaga() {
  yield takeLatest("GET_DATA", getDataSaga);
}
