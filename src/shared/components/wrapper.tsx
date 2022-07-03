//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrap } from '../models/interfaces';
import { THEME } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Wrapper = ({ children, style }: Wrap) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { paddingTop: insets.top }, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.colors.light,
    },
});

export default Wrapper;
