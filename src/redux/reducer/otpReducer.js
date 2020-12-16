// import {
//   OTP_API_CALL_SUCCESS,
//   OTP_API_CALL_FAILURE,
//   OTP_LOADER,
// } from '../actions/types';

// const initialState = {
//   loading: false,
//   data: {}
// };

// export default OTPReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case OTP_API_CALL_SUCCESS:
//       return {
//         ...state,
//         data: true,
//         age: action.payload.categoryInfo.ageName,
//         genre: action.payload.categoryInfo.genreName,
//         archetype: action.payload.categoryInfo.archeTypeName,
//         location: action.payload.categoryInfo.cityName,
//         actorListData: action.payload.data,
//         imageListArray: [...state.imageListArray, ...action.payload],
//       };
//     case OTP_API_CALL_FAILURE:
//       return {
//         ...state,
//         offset: action.payload,
//       };
//     case OTP_LOADER:
//       return {
//         ...state,
//         loader: action.payload,
//       };
//     default:
//       return state;
//   }
// };
