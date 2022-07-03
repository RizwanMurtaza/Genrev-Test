//import liraries
import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Confirmation from '../pages/auth/confirmation';
import Welcome from '../pages/auth/welcome';
import Login from '../pages/auth/login';


const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    return (
        <>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor={'white'}
            />
            <Stack.Navigator>
                <Stack.Screen
                    name="confirmation"
                    component={Confirmation}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </>
    );
};

export default AuthStack;
