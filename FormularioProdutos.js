import {useState} from 'react'
import {View, Text,StyleSheet,Button, TextInput} from 'react-native'
import GerarDados from './db/GerarDados'
import {Produto} from './db/Produto'

export default function FormularioProduto({navigation}){
  const[codigo,setCodigo] = useState('');
  const[nome, setNome] = useState('');
  const[quantidade,setQuantidade] = useState('');
  const[valor, setValor] = useState('');

  const salvar =()=>{
    var produto = new Produto(parseInt(codigo),nome,parseInt(quantidade),valor);
    var gerardados = new GerarDados();
    gerardados.adicionar(produto).then(navigation.navigate('Listar'))

  }

  return(
    <View style={estilos.janela}>
      <Text> Formulario de Cadastro</Text>
    <TextInput style={estilos.input} placeholder={"Codigo produto"} keyboardType={'numeric'} onChangeText={setCodigo} />
    <TextInput style={estilos.input} placeholder={"Nome produto"} keyboardType={'string'} onChangeText={setNome} />
    <TextInput style={estilos.input} placeholder={"Quantidade produto"} keyboardType={'numeric'} onChangeText={setQuantidade} />
    <TextInput style={estilos.input} placeholder={"Valor produto"} keyboardType={'numeric'} onChangeText={setValor} />

    <View style={estilos.botao}>
      <Button title="Salvar" onPress={salvar}
      color="#483d8b"/>
    </View>
    </View>
  );

}

const estilos = StyleSheet.create({
  input:{
    margin:5,
    padding: 5,
    backgroundColor:'white',
    borderRadius: 8
  },
  janela:{
    flex:1,
    backgroundColor: '#896fff'
  }, 
  botao:{
    margin:5,
    borderRadius: 8,
    backgroundColor: '#483d8b',
    padding:2
  }
})













