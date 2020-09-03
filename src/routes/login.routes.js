import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu';
import Sign_up from '../pages/Sign_up/Sign_up';
import Password from '../pages/Password/Password';

import Drawers from './menu.routes';

const LoginStack = createStackNavigator();

export default function LoginStacks() {
    return (
        <LoginStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#820606'}, headerTintColor:'#FFF', headerTitleAlign:'center'}}>
        </LoginStack.Navigator>
    );
}