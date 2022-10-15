import React from "react";

import { View, Text, StyleSheet, TextInput } from 'react-native'

const Description = () => {
    return (
        <View>
            <Text style={styles.textHead}>Description (Optional)</Text>
            <View style={styles.father}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                    />
                </View>
            </View>
        </View>
    )
}
export default Description;

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
        paddingTop: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        height: 250,
        width: '80%',

    },
    input: {
        marginLeft: 10,
        fontSize: 20,
        color: 'black',
        paddingHorizontal: 10,
    }
}) 