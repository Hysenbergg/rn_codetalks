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
        marginBottom: 10,
        alignItems: 'center',
    },
    username: {
        fontSize: 16,
        flex: 1,
        marginLeft: 5
    },
    message: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '600'
    },
    date: {
        marginRight: 5
    }
})