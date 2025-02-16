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
        backgroundColor: colors.orange[500],
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 60
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.yellow[50]
    },
    icon: {
        color: colors.yellow[50]
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
        backgroundColor: colors.orange[500],
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    addButtonText: {
        fontSize: 20,
        color: colors.yellow[50]
    }
})