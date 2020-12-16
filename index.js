/**
 * @format
 */
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { name as appName } from './app.json';
import reducers from './src/redux/reducer';
import rootSaga from './src/sagas';
import HomeScreen from './src/screens/HomeScreen';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
console.reportErrorsAsExceptions = false;
// console.disableYellowBox = true;
const AppContainer = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);