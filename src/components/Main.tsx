import { View, Text, TextInput, StyleSheet } from 'react-native';
import Body from './Body';

//button imports
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
            <Ionicons name="arrow-back" size={40} color="black" />
            <Text>Projects</Text>
            <AntDesign name="delete" size={40} color="red" />

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
    },
    Header: {
        backgroundColor: '#FFF',
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    body: {
        backgroundColor: '#FFF',
        flex: 10
    },


    
})

