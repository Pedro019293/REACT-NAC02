import React, { Component, useState} from 'react';
import { Text, StyleSheet,View,Image,FlatList, SafeAreaView,Modal, TouchableHighlight, Label} from 'react-native';

var pesquisa = "";
 
export default class Nac02 extends React.Component {
 
 constructor(props) {
 super(props);
 this.state = {
 data: []
  }
 }
 
 loadUsers = () => {
 
 fetch("https://reqres.in/api/users?page=2")
 .then( res => res.json() )
 .then( res => {
 this.setState({
 data: res.data || []
 })
 })
 }
 
 componentDidMount() {
 this.loadUsers();
 }
 
 render() {
 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={this.state.data}
 renderItem={({item}) => (
 
 
 <View style={styles.line}>
 <Image
 source={{uri: item.avatar }}
 style={styles.avatar}
 />

 <View style={styles.info}>
 <Text style={styles.email}>{item.email}</Text>
 <Text style={styles.name}> ID: {item.id} - {item.first_name} {item.last_name} </Text>
    </View>
</View>

 )}
 stickyHeaderIndices={[0]}
 />

 <Modal animationType = {'fade'}
          transparent = {false}
          visible = {this.state.modalVisible}
          onRequestClose = {
            () => {console.log('Fechou o modal')}
          }></Modal>
           <View style={styles.modal}>
             <TouchableHighlight
              onPress={()=> this.alteraModal(!this.state.modalVisible)}>
            <Text style={styles.button}>Pesquisar Usuário por ID:</Text>
          </TouchableHighlight>
            </View>

 
 </SafeAreaView>
 )
 }
}
 
const styles = StyleSheet.create({
 
 container:{
 marginTop: 15,
 marginLeft: 15,
 backgroundColor: "#FFF",
 borderTopWidth: 0,
 borderBottomWidth: 0
 },
 line: {
 height: 50,
 flexDirection: "row",
 borderBottomColor: "#BLACK",
 borderBottomWidth: 1
 },
 avatar: {
 width: 40,
 height: 40,
 marginRight: 10,
 alignSelf: "center"
 },
 info: {
 width: '100%',
 flexDirection: "column",
 justifyContent: "flex-start",
 backgroundColor: 'lightblue'
 },
 name: {
 fontSize: 12
 },
 email: {
 fontSize: 14,
 fontWeight: "bold"
},
modal:{
  backgroundColor: 'blue',
  borderColor: 'lightblue',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  padding: 10
},
 button:{
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    backgroundColor: 'lightblue',
    textAlign: 'center'
  }
})