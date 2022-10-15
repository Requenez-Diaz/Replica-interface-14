import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Url = () => {
    return (
        <View>
            <Text style={styles.textHead}>Project Url (Optional)</Text>
            <View style={styles.father}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="https://reactnative.dev/docs/handling-text-input"
                    />
                </View>
            </View>
        </View>
    )
}
export default Url;

const styles = StyleSheet.create({
    father: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    textHead: {
        marginLeft: 60,
        paddingTop: 15,
        fontSize: 20,
        paddingVertical: 5,
        marginTop: 15,
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
