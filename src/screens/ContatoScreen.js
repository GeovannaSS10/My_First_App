import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'; // Importe TextInput aqui

const ContatoScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>You're in contato</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter your message"
                multiline
            />
        </View>
    );
}

export default ContatoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 100,
        width: '40%',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        paddingHorizontal: 10,
    },
});
