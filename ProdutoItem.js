import {View, Text, StyleSheet} from 'react-native'

export default function ProdutoItem({props}){
  return(
    <View style={estilo.item}>
      <Text>
        {props.produto.codigo} -- {props.produto.nome}
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  item:{
    flex: 1
  }
})









