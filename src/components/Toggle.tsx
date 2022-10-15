import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Toggle = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.txt}>Current</Text>
                <FontAwesome style={styles.input} name="toggle-off" size={24} color="#EDEDED" />
            </View>
        </View>
    );
}
export default Toggle;

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
        fontSize: 20,
        marginLeft: 60,
        color: 'gray'
    },
    input: {
        fontSize: 25,
        marginLeft: 45,
    }
})