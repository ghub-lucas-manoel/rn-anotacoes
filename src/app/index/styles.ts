import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.orange[500],
        alignItems: 'center',
        padding: 10
    },
    icon: {
        color: colors.yellow[50]
    },
    logo: {
        height: 50,
        width: 50
    },
    main: {
        padding: 10,
        gap: 10
    },
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end"
    },
    modalContainer: {
        backgroundColor: colors.orange[200],
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        bottom: 0,
        position: "absolute",
        maxHeight: '100%',
        overflow: "hidden"
    },
    modalHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.orange[500],
        padding: 10,
    },
    modalHeaderTitle: {
        fontSize: 23,
        fontWeight: '400',
        color: colors.yellow[50]
    },
    modalSection: {
        maxHeight: '100%'
    },
    modalSectionDescription: {
        fontSize: 20,
        padding: 10
    },
    modalSectionButton: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        backgroundColor: colors.orange[500],
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    modalSectionButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.yellow[50]
    },
    modalSectionFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    }
});