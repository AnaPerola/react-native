import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index from '../pages/Main/Index';

import LoginStacks from './login.routes';

const Stack = createStackNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Index" component={Index} options={{ title: '', headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginStacks} options={{ title: '', headerShown:false}}/>
        </Stack.Navigator>
    );
}
