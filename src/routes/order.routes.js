import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Order from '../pages/Order/Order';

const Stack = createStackNavigator();

export default function OrderStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
    );
}
