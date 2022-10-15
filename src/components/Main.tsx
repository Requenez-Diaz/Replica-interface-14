import { View, Text, TextInput, StyleSheet } from 'react-native';
import Body from './Body';

//button imports
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
            <Ionicons name="arrow-back" size={35} color="black" />
            <Text style= {styles.textHeader}>Projects</Text>
            <AntDesign name="delete" size={35} color="red" />

            </View>
            <View style={styles.body}>
                <Body/>
            </View> 
        </View>
    )
}
export default Main;
const styles = StyleSheet.create ({
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
    }


    
})

