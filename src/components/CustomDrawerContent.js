import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// Asegúrate de importar la imagen correctamente
const logo = require('../../assets/favicon.png'); // Asegúrate de que la ruta sea correcta

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        padding: 16, // Ajusta el padding según necesites
    },
    logo: {
        width: 100, // Ajusta el ancho según necesites
        height: 100, // Ajusta la altura según necesites
    },
});

export default CustomDrawerContent;
