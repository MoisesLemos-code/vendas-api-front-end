import React, { Component } from 'react';
import {
  View, ScrollView, FlatList, Text, StyleSheet,
  TouchableOpacity, TextInput
} from 'react-native'
import api from "../../services/api"

import CardCliente from '../../components/CardCliente'

export default class Cliente extends Component {

  dados = [
    { id: 1, nome: 'Moisés Lemos dos Santos', endereco: 'Na minha rua no meu numero', email: 'moisesTeste@outlook.com' },
    { id: 2, nome: 'Maria Carolina', endereco: 'irineu', email: 'moisesTeste@outlook.com' },
    { id: 3, nome: 'Daniel Alves', endereco: 'você não sabe nem eu', email: 'moisesTeste@outlook.com' },
    { id: 4, nome: 'RoDOLfo', endereco: 'sla vei coloca qualquer coisa ai', email: 'moisesTeste@outlook.com' },
    { id: 5, nome: 'Lilian Kelly', endereco: 'é aqui que tira o auxilio emergencial?', email: 'moisesTeste@outlook.com' },
    { id: 6, nome: 'Preciso dormir', endereco: 'to puto', email: 'moisesTeste@outlook.com' },
    { id: 7, nome: 'a mimir', endereco: 'mimindo', email: 'moisesTeste@outlook.com' },
    { id: 8, nome: 'a', endereco: 'a', email: 'a' },
  ]

  componentDidMount = async () => {
    try {
      await api.get(`/cliente/list/`)
        .then(res => {
          const nameList = res.data;
          this.setState({ nameList });
        });

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listView}
          data={this.dados}
          renderItem={
            ({ item, index }) => <CardCliente key={index}
              item={item} />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353434',
    flex: 1,
    justifyContent: 'center',
  },
  listView: {
    alignItems: 'center'
  }
});