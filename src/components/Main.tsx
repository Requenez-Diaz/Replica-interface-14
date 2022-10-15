import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Body from './Body';

//button imports
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Ionicons name="arrow-back" size={35} color="black" />
                <Text style={styles.textHeader}>Projects</Text>
                <AntDesign name="delete" size={35} color="red" />

            </View>
            <View style={styles.body}>
                <Body />
            </View>
            <TouchableOpacity>
                <View style={styles.footer}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>
                            Save
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
}
export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        justifyContent: 'center'
    },
    Header: {
        backgroundColor: '#FFF',
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
        paddingHorizontal: 30,
    },
    body: {
        backgroundColor: '#FFF',
        flex: 10
    },
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 200
    },
    footer: {
        height: 100,
        borderColor: '#FAFAFA',
        alignItems: 'center'
    },
    btn: {
        marginTop: 25,
        width: '60%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }

})

