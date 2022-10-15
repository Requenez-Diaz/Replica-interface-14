import { View, Text, ScrollView } from "react-native";
import Register from "./Register";
import Data from "./Data";
import Toggle from "./Toggle";
import Input from "./Input";
import Description from "./Description";
import Url from "./Url";

const Body = () => {
  return (
    <ScrollView>
      <View>
        <Register />
        <Data />
        <Toggle />
        <Input />
        <Description />
        <Url />
      </View>
    </ScrollView>
  );
};
export default Body;
