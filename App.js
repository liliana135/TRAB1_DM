import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Components
import EstadiaComponent from './components/Estadia';
import ReservasComponent from './components/Reservas';
import DefinicoesComponent from './components/Definicoes';
import SignInComponent from './components/SignIn';
import { AuthContext } from './context/AuthContext'; // Import Context



import SignUpComponent from './components/SignUp';
import Estadia from './components/Estadia';




// Screen Methods
function EstadiaScreen({ navigation }) {
  return (
    <EstadiaComponent navigation={navigation} />
  );
}

function ReservasScreen({ navigation }) {
  return (
    <ReservasComponent navigation={navigation} />
  );
}

function DefinicoesScreen({ navigation }) {
  return (
    <DefinicoesComponent navigation={navigation} />
  );
}

function SignUpScreen({ navigation}) {
  return (
    <SignUpComponent navigation={navigation}/>
  );
}

function SignInScreen({ navigation }) {
  return (
    <SignInComponent navigation={navigation} />
  );
}

// Blog Stack Navigation
const StackAuth = createStackNavigator();
function NavAuth(logged) {

  return (
    <StackAuth.Navigator
      initialRouteName={logged ? "App" : "SignIn"} // Set Initial screen
      headerMode="none" // Hide top nav bar
      screenOptions={{
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}
    >
      <StackAuth.Screen name="SignIn" component={SignInScreen} />
      <StackAuth.Screen name="App" component={NavTab} />
    </StackAuth.Navigator>
  );
}

// App Tab Navigation
const Tab = createBottomTabNavigator();
function NavTab(props) {
  const { user } = props.route.params;

  return (
    <AuthContext.Provider value={user}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Estadia') { iconName = 'ios-search-outline' }
            else if (route.name === 'Reservas') { iconName = 'ios-briefcase-outline'; }
            else if (route.name === 'Definições') { iconName = 'ios-settings-outline'; }
            else if (route.name === 'Registar') { iconName = 'person-outline'; }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{ activeTintColor: 'rebeccapurple', inactiveTintColor: 'black' }}
      >
        <Tab.Screen name="Estadia" component={NavEstadia} />
        <Tab.Screen name="Reservas" component={NavReservas} />
        <Tab.Screen name="Definições" component={NavDefinicoes} />
        <Tab.Screen name="Registar" component={SignUpScreen} />

      </Tab.Navigator>
    </AuthContext.Provider>
  );
}

// Blog Stack Navigation
const Stack = createStackNavigator();
function NavEstadia() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}>
      <Stack.Screen name="Estadia" component={EstadiaScreen} options={{ title: 'Estadia' }} />
    </Stack.Navigator>
  
  );
}

const Stack1 = createStackNavigator();
function NavReservas() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}>
      <Stack.Screen name="Reservas" component={ReservasScreen} options={{ title: 'Reservas' }} />
    </Stack.Navigator>
  );
}

const Stack2 = createStackNavigator();
function NavDefinicoes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerBG,
        headerTintColor: '#eee',
        headerTitleStyle: styles.headerBold
      }}>
      <Stack.Screen name="Definicoes" component={DefinicoesScreen} options={{ title: 'Definições' }} />
    </Stack.Navigator>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <NavigationContainer style={styles.container} >
        { NavAuth(this.context.isLogged)}
      </NavigationContainer>
    );
  }
}
App.contextType = AuthContext;

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerBG: {
    backgroundColor: 'rebeccapurple'
  },
  headerBold: {
    fontWeight: 'bold'
  }
});
