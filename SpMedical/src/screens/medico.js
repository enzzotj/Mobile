import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import api from '../services/api';

export default class Medico extends Component {
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
                source={require("../../assents/img/LogoMedico.png")}
                style={styles.mainHeaderImg}
              />
              <Text style={styles.mainHeaderText}>MEDICO</Text>
  
            </View>
  
            <View style={styles.mainHeaderLine}>
              <Text style={styles.mainHeaderLineText}>Consultas :</Text>
            </View>
  
          </View>
  
          <View style={styles.mainBody}>
            <FlatList
              contentContainerStyle={styles.mainBodyContent}
              data={this.state.listaMedico}
              keyExtractor={item => item.nomePaciente}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  
    renderItem = ({ item }) => (
      <View style={styles.flatItemRow}>
        <View style={styles.flatItemContainer}>
  
          <Text style={styles.flatItemInfo}>Paciente: {item.nomePaciente}</Text>
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
      marginRight: -5,
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