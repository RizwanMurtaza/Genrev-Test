//import liraries
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './auth.routes';
import { navigationRef } from '../shared/services/nav.service';

const Routes = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <AuthStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default Routes;
