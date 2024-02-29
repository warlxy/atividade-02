import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/screens/LoginScreen"
import CadastroUsuario from "./src/screens/CadastroScreen"
import ListaContato from "./src/screens/ListaContato"
import { TouchableOpacity } from 'react-native-web';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{ 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          } }}/>

        <Stack.Screen name="Usuário" component={CadastroUsuario} options={{ 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          } }}/>

        <Stack.Screen name="Lista de Contato" component={ListaContato} options={{ 
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          },
          // headerRight: () => (
          //   <TouchableOpacity onPress={() => Navigation.navigate('Contato')}>
          //     <
          //   </TouchableOpacity>
          // )
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   teste: {
//     backgroundColor: '#000',
//     textAlign: 'center'
//   }
// });