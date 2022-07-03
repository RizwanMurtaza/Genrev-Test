//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import QratedBtn from '../../../shared/components/button';
import Wrapper from '../../../shared/components/wrapper';
import { GenericNavigation } from '../../../shared/models/interfaces';
import { STYLES } from './confirmation.styles';

const Confirmation = ({ navigation }: GenericNavigation) => {
    return (
        <Wrapper>
            <Text style={[STYLES.heading, STYLES.mrgnBtm]}>Are you 21 or older?</Text>
            <QratedBtn
                wrapStyle={STYLES.mrgnBtm}
                onPress={() => {
                    navigation.navigate('welcome');
                }}
                text={'Yes'} />
            <QratedBtn
                wrapStyle={STYLES.mrgnBtm}
                text={'No'} />
        </Wrapper>
    );
};

export default Confirmation;
