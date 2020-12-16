// import {put, takeLatest, call} from 'redux-saga/effects';
// import {LOGIN_API_CALL} from '../redux/actions/types';
// import {
//   logInApiSuccessAction,
//   logInApiFailureAction,
//   loaderForLoginAction,
// } from '../redux/actions';
// import callAPI from '../service/api';

// function* login(props) {
//   try {
//     yield put(loaderForLoginAction(true));
//     const loginRequest = this.getloginRequest(props);
//     const {response} = yield call(callAPI, loginRequest);
//     const responseData = response.data;
//     yield put(logInApiSuccessAction(responseData));
//     yield put(loaderForLoginAction(false));
//   } catch (error) {
//     yield put(loaderForLoginAction(false));
//     yield put(logInApiFailureAction(error));
//   }
// }

// // getloginRequest = (props) => {
// //   // const logInApiRequest = new LogInApiRequest();
// //   actorlistRequest.type = Types.POST;
// //   var obj = {};
// //   obj.mobile = props.payload.mobile;
// //   obj.otp = props.payload.otp;
// //   // obj.mobile = '8990003445';
// //   // obj.otp = '1234562242';
// //   console.log(obj);
// //   var postParams = JSON.stringify(obj);
// //   var mutation = 'mutation {\nloginCustomer(credentials: params) {\naccess_token\nisNew\n}\n}';
// //   var query = mutation.replace(/params/g, postParams);
// //   var post = {query: query};
// //   console.log(post);
// //   // ageId: props.payload.ageId,
// //   // genreId: props.payload.genreId,
// //   // archetypeId: props.payload.archetypeId,
// //   // location: props.payload.cityId,
// //   return logInApiRequest;
// // };

// export default function* watchLoginApi() {
//   yield takeLatest(LOGIN_API_CALL, login);
// }
