//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import QratedBtn from '../../../shared/components/button';
import Wrapper from '../../../shared/components/wrapper';
import { GenericNavigation } from '../../../shared/models/interfaces';
import { STYLES } from '../confirmation/confirmation.styles';

// create a component
const Welcome = ({ navigation }: GenericNavigation) => {
    return (
        <Wrapper>
            <Text style={[STYLES.heading, STYLES.mrgnBtm]}>Welcome!</Text>
            <QratedBtn
                wrapStyle={STYLES.mrgnBtm}
                onPress={() => {
                    navigation.navigate('login');
                }}
                text={'Sign In'} />
            <QratedBtn
                wrapStyle={STYLES.mrgnBtm}
                text={'Register new member'} />
        </Wrapper>
    );
};


//make this component available to the app
export default Welcome;
