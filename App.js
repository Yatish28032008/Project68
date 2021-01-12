import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from './screens/fb';
import insta from './screens/in'
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Facebook : {screen:Facebook},
    Instagram : {screen:Instagram}
});

const AppContainer = createAppContainer(TabNavigator);