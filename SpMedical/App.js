import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from './src/services/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaMedico: []
    }
  }

  buscarMedico = async () => {
    const resposta = await api.get('/consultas');
    // console.warn(resposta)
    const dadosDaApi = resposta.data;
    this.setState({ listaMedico: dadosDaApi });
  };

  componentDidMount() {
    this.buscarMedico();
  }


  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>

            <Image
              source={require("./assents/img/LogoMedico.png")}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>MEDICO</Text>

          </View>

          <View style={styles.mainHeaderLine}>
            <Text style={styles.mainHeaderLineText}>Consultas :</Text>
          </View>

        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },

  mainHeader: {
    flex: 1,
    marginTop: 20,
    //justifyContent: 'center',
    alignItems: 'center'
  },
  mainHeaderRow: {
    flexDirection: 'row'
  },

  mainHeaderImg: {
    width: 30,
    height: 30,
    marginRight: -5,
    marginTop: -12
  },

  mainHeaderText: {
    fontSize: 20,
    letterSpacing: 5,
    colo: '#999'
  },

  mainHeaderLine: {
    alignSelf: 'stretch',
    tintColor: 'fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#FF5B62',
    marginTop: 20
  },

  mainHeaderLineText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});
