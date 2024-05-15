import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in Home</Text>
            <Button 
                title='Details'
                onPress={() => navigation.navigate('Detalhes')}
            />
            <Button 
                title='Contatos'
                onPress={() => navigation.navigate('Contatos')}
            />
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',    
    },
})
