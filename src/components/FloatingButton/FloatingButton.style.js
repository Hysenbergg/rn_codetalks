import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: colors.third
    }
})