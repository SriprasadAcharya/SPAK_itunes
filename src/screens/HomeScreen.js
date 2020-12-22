// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   TextInput,
//   Button,
//   FlatList,
//   SafeAreaView,
// } from 'react-native';
// import {connect} from 'react-redux';
// import {homeApi} from '../redux/actions/homeAction';

import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, StatusBar, Button } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sachin',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Surya',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hitesh',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = () => {
  const [name, setName] = useState("");

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                 <TextInput
                  placeholder="Name"
                  onChangeText={(e) => setName("hello")}
                  style={{justifyContent: 'flex-start'}}
                />
              </View>
              <View style={{flex: 1}}>
                <Button title="Add Customer" onPress={() => this.onPressSearch} />
              </View>
            </View>
          </View>
        </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;

// class HomeScreen extends Component {
//   componentDidMount() {
//     this.props.homeApi("JACK");
//   }

//   onChangeText = (text) => {
//     console.warn('text', text);
    
//     // this.props.homeApi(text);
//   };

//   onPressSearch = () => {
//     console.warn('text', text);
//     // this.props.homeApi(text);
//   };

//   renderItem = ({item}) => {
//     console.warn("item", item)
//     // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     return (
//       <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//         <Text style={styles.title}>{item.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   render() {
//     const data = this.props.resultListArray;
//     console.log('data', data);
//     return (
//       <SafeAreaView style={addItemStyles.container}>
//         <View style={addItemStyles.wrapper}>
//           <View>
//             <View style={{flexDirection: 'row'}}>
//               <View style={{flex: 1}}>
//                 <TextInput
//                   placeholder="Name"
//                   onChangeText={(text) => this.onChangeText(text)}
//                   style={{justifyContent: 'flex-start'}}
//                 />
//               </View>
//               <View style={{flex: 1}}>
//                 <Button title="Add Customer" onPress={() => this.onPressSearch} />
//               </View>
//             </View>
//           </View>
//         </View>
//         <View>
//           <FlatList
//             data={data}
//             renderItem={this.renderItem}
//             keyExtractor={(item) => item.id}
//             // extraData={selectedId}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// // const addItemStyles = StyleSheet.create({
// //   wrapper: {
// //     padding: 10,
// //     backgroundColor: '#FFFFFF',
// //   },
// //   inputLabels: {
// //     fontSize: 16,
// //     color: '#000000',
// //     marginBottom: 7,
// //   },
// //   inputField: {
// //     backgroundColor: '#EEEEEE',
// //     padding: 10,
// //     color: '#505050',
// //     height: 50,
// //   },
// //   inputWrapper: {
// //     paddingBottom: 20,
// //   },
// //   saveBtn: {
// //     backgroundColor: '#003E7D',
// //     alignItems: 'center',
// //     padding: 12,
// //   },
// //   saveBtnText: {
// //     color: '#FFFFFF',
// //     fontSize: 18,
// //   },
// // });



// const styles = StyleSheet.create({
//   wrapper: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 32,
//   },
//   scrollViewWrapper: {
//     display: 'flex',
//     flex: 1,
//     paddingLeft: 32,
//     paddingRight: 24,
//   },
//   loginHeader: {
//     fontSize: Platform.OS == 'ios' ? 28 : 32,
//     fontWeight: Platform.OS == 'ios' ? '300' : '300',
//     fontFamily: 'sourcesanspro_semibold',
//     marginBottom: 14,
//   },
//   messageHeader: {
//     fontSize: Platform.OS == 'ios' ? 24 : 20,
//     fontFamily: 'montserrat_regular',
//     fontStyle: 'normal',
//   },
// });

// function mappStateToProps(state) {
//   console.log('resultListArray', state.HomeReducer.resultListArray);
//   return {
//     resultListArray: state.HomeReducer.resultListArray,
//   };
// }

// export default connect(mappStateToProps, {homeApi})(HomeScreen);
