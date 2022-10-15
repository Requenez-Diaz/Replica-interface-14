import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { View, Text, StyleSheet, TextInput } from 'react-native'

const Input = () => {
    return (
        <View>
            <Text style={styles.textHead}>Asociated with optional</Text>
            <View style={styles.father}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="May 2022"
                    />
                    <AntDesign style={styles.icon} name="caretdown" size={20} color="black" />
                </View>
            </View>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    father: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    textHead: {

    },
    icon: {
        paddingTop: 6,
        paddingHorizontal: 5,
        paddingVertical: 5

    },
    form: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        borderRadius: 5,
        height: 60,
        width: '80%',
        alignItems: 'center',

    },
    input: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 10
    }
}) 