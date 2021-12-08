import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput
} from 'react-native';

import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: 'marcelo@email.com',
            senha: '1133'

        }
    }

    realizarLogin = async () => {

        // this.props.navigation.navigate('Medico')

        try {
            console.warn(this.state.email + ' ' + this.state.senha)

            const resposta = await api.post('/login', {
                email: this.state.email,
                senha: this.state.senha
            });



            if (resposta.status == 200) {
                const token_api = resposta.data.token;
                await AsyncStorage.setItem('usuariotoken', token_api)
                this.props.navigation.navigate('Medico')
            }

        } catch (error) {
            console.warn(error);

        }



    }

    render() {
        return (

            <ImageBackground
                source={require('../../assents/img/FundoLogin.jpg')}
                style={StyleSheet.absoluteFillObject}
            >
                <View style={styles.main}>

                    <Image source={require('../../assents/img/Logo.png')}
                        style={styles.mainImgLogin} />

                    <TextInput style={styles.inputLogin}
                        placeholder="Username"
                        placeholderTextColor="#9C9C9C"
                        keyboardType='email-address'
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput style={styles.inputLogin}
                        placeholder="Password"
                        placeholderTextColor="#9C9C9C"
                        keyboardType='default'
                        onChangeText={senha => this.setState({ senha })}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.realizarLogin}>
                        <Text style={styles.btnLoginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        // backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#FF5B62',
        marginTop: 55,
        borderRadius: 10
    },
    btnLoginText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Open Sans Light',
        letterSpacing: 2,
    },
    mainImgLogin: {
        height: 100,
        width: 100,
        marginBottom: 55
    },
    inputLogin: {
        width: 260,
        height: 40,
        backgroundColor: '#fff',
        marginTop: 22,
        color: '#000',
        borderRadius: 10,
        borderColor: '#FF5B62',
        borderWidth: 2,
    }

})