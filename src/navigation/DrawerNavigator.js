import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home'; // Asegúrate de que Home esté correctamente definido
import Tasks from '../views/Tasks'; // Asegúrate de que Tasks esté correctamente definido
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tasks" component={Tasks} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
