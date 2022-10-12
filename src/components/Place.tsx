import React from "react";
import { StyleSheet, View, Text, TextInput} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Place = () => {
  return (
    <View style={styles.selectsInputs}>
      <Text style={styles.txtHead}>From</Text>
      <View>
        <AntDesign style={styles.inputsAdd} name="down" size={24} color="black" />
        <TextInput
        style={styles.input}
         placeholder="July 2021" />
      </View>
      <Text style={styles.txtHead}>To</Text>
      <View>
        <AntDesign style={styles.inputsAdd} name="down" size={24} color="black" />
        <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="July 2021"/>
      </View>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  selectsInputs: {
    marginTop: 30,
  },
  txtHead: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#687778",
    borderWidth: 0,
    marginBottom: 7,
    marginTop: 7,
  },
  inputsAdd: {
    position: "absolute",
    color: "#A2AABB",
    top: 10,
    left: 10,
    zIndex: 2,
    fontSize: 22,
  },
  input: {
    borderRadius: 5,
    width: '35%',
    height: 45,
    backgroundColor: "#F2F8FB",
    textAlign: 'center',
    fontSize: 15

  }
});
