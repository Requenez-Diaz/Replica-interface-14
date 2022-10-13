import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
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
      <Text style={styles.txtHead}>From</Text>
      <View style={styles.form}>
        <AntDesign name="down" size={24} color="black" />
        <TextInput
        style={styles.input}
          placeholder="July 2021"
          value={Date}
          onChangeText={(text) => setDate(text)}
        />
        <Text style={styles.txtHead}>To</Text>
        <View style={styles.form}>
          <AntDesign name="down" size={24} color="black" />
          <TextInput
          style={styles.input}
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
    txtHead: {
        marginTop: 20,

    },
    form: {
        marginTop: 10,

    },
    input: {
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        width: '35%',
        marginBottom: 5,
    }
});
