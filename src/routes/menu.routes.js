import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './../pages/Menu/Menu';
import Profile from './../pages/Profile/Profile';
import Setting from './../pages/Setting/Setting';
import Recent from './../pages/Recent/Recent';
import CustomDrawer from '../components/CustomDrawer/Index';
import CarouselItem from '../components/Carousel/CarouselItem';
import ProductItem from '../components/Product/ProductItem';

const Drawer = createDrawerNavigator();

export default function Drawers(){
        return(
        <Drawer.Navigator initialRouteName={Menu} drawerContent={() => <CustomDrawer/>} 
            headerLeft={false}>
                <Drawer.Screen name="Menu" component={Menu} options={{ title: 'teste' }}></Drawer.Screen>
                <Drawer.Screen name="CarouselItem" component={CarouselItem}></Drawer.Screen>
                <Drawer.Screen name="ProductItem" component={ProductItem}></Drawer.Screen>
                <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
                <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
                <Drawer.Screen name="Recent" component={Recent}></Drawer.Screen>
        </Drawer.Navigator>
        )
}
