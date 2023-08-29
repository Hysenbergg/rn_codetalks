import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        color: colors.primary,
        flex: 1
    },
})