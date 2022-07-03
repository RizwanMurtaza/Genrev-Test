//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { QratedBtnType } from '../models/interfaces';
import { THEME } from '../theme';
import { RF } from '../theme/global.styles';

// create a component
const QratedBtn = ({ text, textStyle, onPress, wrapStyle }: QratedBtnType) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, wrapStyle]}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: RF(205),
        paddingTop: RF(16),
        paddingBottom: RF(16),
        paddingLeft: RF(32),
        paddingRight: RF(32),
        borderRadius: RF(8),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.primary,
    },
    text: {
        fontSize: RF(16),
        fontFamily: THEME.fonts.medium
    }
});

//make this component available to the app
export default QratedBtn;
