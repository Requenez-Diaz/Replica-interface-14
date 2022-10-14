import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//https://programmerclick.com/article/27191832973/

export interface AddData {
  Date?: string;
  DateTwo?: string;
}
const Data = () => {
  const [Date, setDate] = useState("");
  const [DateTwo, setDateTwo] = useState("");
  return (
    <View style={styles.padre}>
      <View style={styles.form}>
      <input
      placeholder="July 2022"
      value={Date}
      />
      <AntDesign name="caretdown" size={20} color="black" />
      </View>
      <View style={styles.form}>
      <input
      placeholder="July 2022"
      value={DateTwo}
      />
      <AntDesign name="caretdown" size={20} color="black" />
      </View>
    </View>
  );
};
export default Data;

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  form: {
    backgroundColor:'gray',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 35
  },
});
