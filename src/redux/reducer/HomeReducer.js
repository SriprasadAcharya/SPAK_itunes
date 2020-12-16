import {
  HOME_API_CALL_SUCCESS,
  HOME_API_CALL_FAILURE,
  HOME_LOADER,
} from '../actions/types';

const initialState = {
  loading: false,
  resultListArray: [],
};

export default HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_API_CALL_SUCCESS:
      console.log("payload", action.payload)
      return {
        ...state,
        // data: true,
        // age: action.payload.categoryInfo.ageName,
        // genre: action.payload.categoryInfo.genreName,
        // archetype: action.payload.categoryInfo.archeTypeName,
        // location: action.payload.categoryInfo.cityName,
        // actorListData: action.payload.data,
        resultListArray: [...state.resultListArray, ...action.payload],
      };
    // case HOME_API_CALL_FAILURE:
    //   return {
    //     ...state,
    //     loader: action.payload,
    //   };
    case HOME_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
