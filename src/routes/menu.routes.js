import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './../pages/Menu/Menu';
const RoutesDrawer = createDrawerNavigator();

export default function Drawers(){
        return(
            <RoutesDrawer.Navigator>
            </RoutesDrawer.Navigator>
        )
}
