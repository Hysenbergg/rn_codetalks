import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        paddingHorizontal: 15,
    },
    title_container: {
        borderWidth: 1,
        marginVertical: 10,
        borderStyle: 'dashed',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.white,
        borderRadius: 10,
    },
    info: {
        color: colors.white,
        fontSize: 18
    }
})