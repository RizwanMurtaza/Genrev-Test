import { StyleSheet } from 'react-native';
import { THEME } from '../../../shared/theme';
import { RF } from '../../../shared/theme/global.styles';

export const STYLES = StyleSheet.create({
    heading: {
        fontSize: RF(30),
        color: THEME.colors.dark,
        fontFamily: THEME.fonts.medium
    },
    mrgnBtm: {
        marginBottom: RF(20)
    }
});