import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import api from '../services/api';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Paciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaPaciente: []
    }
  }

  buscarPaciente = async () => {
    const resposta = await api.get('/consultas');
    // console.warn(resposta)
    const dadosDaApi = resposta.data;
    this.setState({ listaPaciente: dadosDaApi });

  //   try {

  //     const valorToken = await AsyncStorage.getItem('usuariotoken');

  //     console.warn(jwtDecode(valorToken).jti);
  //     console.warn(valorToken)

  //     if ((jwtDecode(valorToken).jti === "2")) {


  //       //analisar se 2 é medico ou paciente.


  //       //consultar a api , colocar o retorno em uma lista e utiizar o flatlist para exbibir 
  //       const resposta = await api.get('/consultas/medico'),
  //       const dadosDaApi = resposta.data,
  //       this.setState({ listaMedico: dadosDaApi },
  //       console.warn(resposta)

  //     } else ((jwtDecode(valorToken).jti === "3")){

  //     }

  //   } catch (error) {
  //     console.warn(error);
  //   }
   };

  componentDidMount() {
    this.buscarPaciente();
  }


  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>

            <Image
              source={require("../../assents/img/Logo.png")}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>PACIENTE</Text>

          </View>

          <View style={styles.mainHeaderLine}>
            <Text style={styles.mainHeaderLineText}>Consultas :</Text>
          </View>

        </View>

        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyContent}
            data={this.state.listaMedico}
            keyExtractor={item => item.nomeMedico}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.flatItemRow}>
      <View style={styles.flatItemContainer}>

        <Text style={styles.flatItemInfo}>Paciente: {item.nomeMedico}</Text>
        <Text style={styles.flatItemInfo}>Descrição: {item.descricao}</Text>
        <Text style={styles.flatItemInfo}>Situação: {item.situacao}</Text>
        <Text style={styles.flatItemInfo}>Data: {item.dataConsulta}</Text>

      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },

  mainHeader: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainHeaderRow: {
    flexDirection: 'row'
  },

  mainHeaderImg: {
    width: 30,
    height: 30,
    marginRight: -3,
    marginTop: -12
  },

  mainHeaderText: {
    fontSize: 20,
    letterSpacing: 5,
    color: '#999'
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
  },

  mainBody: {
    flex: 4
  },
  mainBodyContent: {
    paddingTop: 20,
    paddingRight: 50,
    paddingLeft: 50
  },
  flatItemRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20
  },
  flatItemContainer: {
    flex: 1
  },
  flatItemInfo: {
    fontSize: 13,
    color: '#999',
    lineHeight: 20
  }
});