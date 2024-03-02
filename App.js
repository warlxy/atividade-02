import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "./src/screens/LoginScreen";
import CadastroUsuario from "./src/screens/CadastroScreen";
import ContatoScreen from "./src/screens/ContatoScreen";
import ListaContatos from './src/screens/ListaContatos';

const Stack = createStackNavigator();
const navigation = useNavigation();

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

        <Stack.Screen name="Lista de Contatos" component={ListaContatos} options={{ 
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
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('ContatoScreen')}>
              <Icon style={styles.icone} name="plus" size={30} color="#fff" />
            </Pressable>
          ),
           }}/>

        <Stack.Screen name="Novo Contato" component={ContatoScreen} options={{ 
          headerStyle: {
            backgroundColor: '#1670f7',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
          } 
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icone: {
    paddingRight: 20,
  },
});