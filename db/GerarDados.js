import AsyncStorage from '@react-native-community/async-storage';
import { Produto } from './Produto';

const salvarProduto = async (key: String, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    alert ("Produto salvo com sucesso!" + e.getMessage);
  } catch (e) {
    alert('Erro ao salvar --' + e.getMessage);
  }
};

const obterProdutoJson = async () => {
  try {
    let chaves: Array<String> = [];
    chaves = AsyncStorage.getAllKeys();
    return await AsyncStorage.multiGet(chaves);
  } catch (e) {
    //alert('Erro ao recuperar dados--' + e.getMessage);
  }
};

const obterProdutos = async () => {
  try {
    let objetos = [];
    let objetosJSon = await obterProdutoJson();
    if (objetosJSon != null && objetosJSon.length > 0) {
      objetosJSon.forEach((elemento) => {
        let produto: Produto = JSON.parse(elemento);
        objetos.push(produto);
      });
    }
    return objetos;
  } catch (e) {
    //alert('Erro ao recuperar dados--' + e.getMessage);
  }
};

export default class GerarDados{
  async adicionar(produto:Produto){
    salvarProduto(produto.codigo.toString(), produto);
  }

  async obterTodos(): Promise<Array<Produto>>{
    let lista: Array<Produto> = await obterProdutos();
    return lista;
  }
}











