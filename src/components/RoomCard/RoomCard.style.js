import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        width: 160,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        color: colors.primary
    }
})