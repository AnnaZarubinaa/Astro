import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/home';
import MyNumbers from '../../screens/myNumbers/myNumbers';
import Planets from '../../screens/planets/planets';

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Planets" component={Planets} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MyNumbers" component={MyNumbers} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}