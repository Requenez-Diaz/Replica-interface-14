import { View, Text, StyleSheet, ScrollView } from "react-native";
import Register from "./Register";
import Data from "./Data";
import Toggle from "./Toggle";
import Input from "./Input";

const Body = () => {
  return (
    <ScrollView>
      <View>
        <Register />
        <Data />
        <Toggle />
        <Input/>
      </View>
    </ScrollView>
  );
};
export default Body;

const styles = StyleSheet.create({});
