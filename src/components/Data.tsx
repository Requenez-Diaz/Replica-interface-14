import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface AddData {
  Date?: string;
  DateTwo?: string;
}
const Data = () => {
  const [Date, setDate] = useState("");
  const [DateTwo, setDateTwo] = useState("");
  return (
    <View>
      <View style= {styles.txt}>
      <Text style= {styles.txt1} >From</Text>
      <Text style= {styles.txt1} >To</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.box2}>
            <AntDesign name="down" size={24} color="black" />
          </View>
          <TextInput
            placeholder="July 2021"
            value={Date}
            onChangeText={(text) => setDate(text)}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.box2}>
            <AntDesign name="down" size={24} color="black" />
          </View>
          <TextInput
            placeholder="July 2021"
            value={DateTwo}
            onChangeText={(text) => setDateTwo(text)}
          />
        </View>
      </View>

    </View>
  );
};
export default Data;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,

  },
  form: {
    height: 50,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  txt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,

  },
  txt1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingTop: 20
  },
box2: {
  justifyContent: 'flex-end'
}

  //   txtHead: {
  //     fontSize: 18,
  //     color: '#05375a'
  //   },
  //   form: {
  //     flexDirection: 'row',
  //       marginTop: 10,
  //       width: '40%',
  //       paddingBottom: 5
  //   },
  //   input: {
  //     flex: 1,
  //     marginTop: Platform.OS === 'android' ? 0: 12,
  //       padding: 10,
  //       borderColor: 'red',
  //       paddingLeft: 10,
  //       borderWidth: 1,
  //       // borderRadius: 10,
  //       // width: '100%',
  //       // marginBottom: 5,
  //   },
  //   txtHead2: {
  //     marginTop: 5,
  // },
});
