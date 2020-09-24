import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#fff',
                activeBackgroundColor: '#00b94a',
                inactiveTintColor: '#fff',
                inactiveBackgroundColor: '#000'
            }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Registrar" component={New} />
            <AppDrawer.Screen name="Profile" component={Profile} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;