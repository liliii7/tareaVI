import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../components/Home/Home';
import GenderPredictor from "../GenderPredictor/GenderPredictor";
import AgePredictor from '../AgePredictor/AgePredictor';
import Country from "../Country/Country";

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Gender' component={GenderPredictor} />
                <Drawer.Screen name='Age' component={AgePredictor} />
                <Drawer.Screen name='Country' component={Country} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}