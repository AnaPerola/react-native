import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu';
import Sign_up from '../pages/Sign_up/Sign_up';
import Password from '../pages/Password/Password';

import Drawers from './menu.routes';

const Stack = createStackNavigator();

export default function LoginStacks() {
    return (
        <Stack.Navigator initialRouteName={Login} screenOptions={{headerStyle: 
            {backgroundColor: '#820606'}, headerTintColor:'#FFF', headerTitleAlign:'center'}}>
            <Stack.Screen name="Login" component={Login} options={{ title: 'Faça seu Login' }}/>
            <Stack.Screen name="Menu" component={Drawers}options={{ title: '', headerLeft:false}}/>
            <Stack.Screen name="Password" component={Password}options={{ title: 'REDEFINIR SENHA' ,headerLeft:false}}/>
            <Stack.Screen name="Sign_up" component={Sign_up}options={{ title: 'CADASTRE'}}/>
        </Stack.Navigator>
    );
}