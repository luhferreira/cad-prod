import React, {useState, useEffect} from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'

import GerarDados from './db/GerarDados'
import ProdutoItem from './ProdutoItem'
import {estilos} from './css/estilos'

export default function ListarProdutos({navigation}){
 const gerardados = new GerarDados();
 const[produtos, setProdutos] = useState([]);

 useEffect(() =>{
   gerardados.obterTodos().then(obj => setProdutos(obj))
 });

 const mykeyExtractor = item => {
   return item.codigo.toString();
 }

 return(
   <View style = {estilos.container}>
    <Text> Lista de Produtos</Text>
    <FlatList style = {estilos.scrollContainer} 
    data={produtos}
    contentContainerStyle = {estilos.itemContainer}
    keyExtractor = {mykeyExtractor}
    renderItem = {({item}) => <ProdutoItem produto = {item} />}
    />
   </View>
 );
}