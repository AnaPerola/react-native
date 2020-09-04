import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './../pages/Menu/Menu';
import Profile from './../pages/Profile/Profile';
import Setting from './../pages/Setting/Setting';
import Recent from './../pages/Recent/Recent';
import CustomDrawer from '../components/CustomDrawer/Index';

const Drawer = createDrawerNavigator();

export default function Drawers(){
        return(
        <Drawer.Navigator initialRouteName={Menu} drawerContent={() => <CustomDrawer/>} 
            headerLeft={false}>
                <Drawer.Screen name="Menu" component={Menu} options={{ title: 'Cardápio' }}></Drawer.Screen>
                <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
                <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
                <Drawer.Screen name="Recent" component={Recent}></Drawer.Screen>
            </Drawer.Navigator>
        )
}
