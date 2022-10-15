import { View, TextInput, StyleSheet, Text } from 'react-native';

const Register = () => {
    return (
        <View>
            <Text style={styles.text}>Project Name</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputs}
                    placeholder='Event Booking App'
                />
            </View>
            <Text style={styles.text}>Role</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputs}
                    placeholder='Event Booking App'
                />
            </View>
        </View>
    )
}
export default Register;

const styles = StyleSheet.create({
    inputs: {
        width: '80%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'

    },
    container: {
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontSize: 20,
        marginLeft: 50,
        paddingTop: 5,
        alignItems: 'center',
        color: 'gray'
    }
})