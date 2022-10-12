import { View, Text, StyleSheet } from "react-native";
import Register from "./Register";
import Place from "./Place";

const Body = () => {
  return (
    <View>
      <Register />
      <Place/>
    </View>
  );
};
export default Body;

const styles = StyleSheet.create({});
