import {StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    username: {
        fontSize: 16
    },
    message: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '600'
    }
})