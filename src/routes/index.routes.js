import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../pages/Login/Login';
import Index from '../pages/Main/Index';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import LoginStacks from './login.routes';
import Password from '../pages/Password/Password';
import Sign_up from '../pages/Sign_up/Sign_up';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#820606'}, headerTintColor:'#FFF', headerTitleAlign:'center'}}>
            <Stack.Screen name="Index" component={Index} options={{ title: '', headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{ title: 'LOGIN'}}/>
            
            <Stack.Screen name="Menu" component={Menu}options={{ title: ''}}/>
            <Stack.Screen name="Password" component={Password}options={{ title: 'REDEFINIR SENHA'}}/>
            <Stack.Screen name="Sign_up" component={Sign_up}options={{ title: 'CADASTRE'}}/>
        </Stack.Navigator>
    );
}

function RoutesDrawer() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Order" component={Order} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }