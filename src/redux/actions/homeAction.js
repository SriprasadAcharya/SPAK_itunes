import {
    HOME_API_CALL,
    HOME_API_CALL_SUCCESS,
    HOME_API_CALL_FAILURE,
    HOME_LOADER
  } from './types';
  
  export const homeApi = (searchText) => {
    console.log("searchText", searchText)
    return {
      type: HOME_API_CALL,
      payload: searchText,
    };
  };
  
  export const homeApiSuccessAction = (data) => {
    console.log("data", data)
    return {
      type: HOME_API_CALL_SUCCESS,
      payload: data,
    };
  };
  
  export const homeApiFailureAction = (data) => {
    return {
      type: HOME_API_CALL_FAILURE,
      payload: data,
    };
  };
  
  export const loaderForHomeAction = loader => {
    return {
      type: HOME_LOADER,
      payload: loader,
    };
  };
  
