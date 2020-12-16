import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {homeApi} from '../redux/actions/homeAction';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.homeApi('JACK');
  }

  render() {
    return (
    <View style={styles.wrapper}>
        <View style={styles.wrapper}>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewWrapper: {
    display: 'flex',
    flex: 1,
    paddingLeft: 32,
    paddingRight: 24,
  },
  loginHeader: {
    fontSize: Platform.OS == 'ios' ? 28 : 32,
    // color: colors.black,
    fontWeight: Platform.OS == 'ios' ? '300' : '300',
    fontFamily: 'sourcesanspro_semibold',
    marginBottom: 14,
  },
  messageHeader: {
    fontSize: Platform.OS == 'ios' ? 24 : 20,
    fontFamily: 'montserrat_regular',
    fontStyle: 'normal',
  },
});

function mappStateToProps(state) {
  console.log('resultListArray', state.HomeReducer.resultListArray);
  return {
    resultListArray: state.HomeReducer.resultListArray,
  };
}

export default connect(mappStateToProps, {homeApi})(HomeScreen);
