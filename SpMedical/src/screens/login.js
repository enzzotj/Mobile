import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';

export default class Login extends Component {
    realizarLogin = () => {
        this.props.navigation.navigate('Medico')
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity
                style={styles.btnLogin}
                onPress={this.realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 38,
        width: 240,
        backgroundColor: '#fff',

    }

})