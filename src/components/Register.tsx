import { View, TextInput, StyleSheet, Text } from 'react-native';

const Register  = () => {
    return (
        <View style={styles.container}>
            <Text>Project Name</Text>
            <TextInput style={styles.inputs}
            placeholder='Event Booking App'
            />
            <Text>Course</Text>
            <TextInput style={styles.inputs}
            placeholder='Computer science'
            />
            <Text>School</Text>
            <TextInput style={styles.inputs}
            placeholder='Harvard University'
            />
        </View>
    )
}
export default Register;

const styles = StyleSheet.create ({
    inputs: {
        width: '80%',
        height: 45,
        borderRadius: 10,
        backgroundColor: 'gray',

    },
    container: {
        alignItems: 'center'
    }
})