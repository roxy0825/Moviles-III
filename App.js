import { StyleSheet, Text, View,TextInput } from 'react-native';
import { styles,mytext } from './assets/styles/styles';

export default function App() {
  return (
    //styles.container
    <View style={[styles.container,styles.borders,{borderRadius:10,backgroundColor:'with'}]}>
      <Text style={mytext.test}>Open up App.js to start working on your app!</Text>
      <TextInput
      placeholder='Ingrese nombre'
      style={{marginTop:20}}

      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white'
//   },
//   borders:{
//     borderWidth:3,
//     borderColor:'blue'

//   }
// });
// const mytext =  StyleSheet.create({
//   test:{
//     color:'red',
//     fontSize:'10px',
//     fontWeight:'bold'
//   }
// })