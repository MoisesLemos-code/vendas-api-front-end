import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import ModalCard from './modalCard'

export default class CardCliente extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <FontAwesome5 name={'times-circle'} size={25} color={'#353434'} />
              </TouchableHighlight>
              <ModalCard item={this.props.item} />
            </View>
          </View>
        </Modal>
        <View style={styles.picture}></View>
        <View style={styles.containerBody}>
          <Text style={styles.textHead}>Nome</Text>
          <Text style={styles.textInfo}>{this.props.item.nome}</Text>
          <Text style={styles.textHead}>Endereco</Text>
          <Text style={styles.textInfo}>{this.props.item.endereco}</Text>
          <Text style={styles.textHead}>Email</Text>
          <Text style={styles.textInfo}>{this.props.item.email}</Text>
        </View>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Editar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#667581',
    padding: 0,
    marginVertical: 10,
    minWidth: '95%',
    maxWidth: '95%',
  },
  containerBody: {
    padding: 10,
  },
  picture: {
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#FFFF',
    alignSelf: 'center',
    margin: 0
  },
  textHead: {
    color: '#353434'
  },
  textInfo: {
    fontSize: 20,
    color: '#FFFF'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: '90%',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#73748E',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    elevation: 2
  },
  closeButton: {
    width: 40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
});
