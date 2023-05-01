import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import Formulario  from './FormularioProdutos'
import ListarProdutos from './ListarProdutos'

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Formulario'>
        <Stack.Screen name="Formulario" component={Formulario}/>
        <Stack.Screen name="Listar" component={ListarProdutos}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}





