import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.orange[200],
        alignItems: 'center',
        padding: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    main: {
        padding: 10,
        gap: 10
    },
    input: {
        borderColor: colors.orange[700],
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.orange[200]
    },
    addButton: {
        backgroundColor: colors.orange[900],
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    addButtonText: {
        fontSize: 20
    }
})