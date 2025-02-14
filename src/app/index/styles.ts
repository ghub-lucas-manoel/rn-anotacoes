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
        backgroundColor: colors.orange[200],
        alignItems: 'center',
        padding: 10
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
        padding: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        bottom: 0,
        position: "absolute",
        maxHeight: '100%'
    },
    modalHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    modalHeaderTitle: {
        fontSize: 23,
        fontWeight: '400',
        paddingBottom: 10
    },
    modalSection: {
        maxHeight: '100%'
    },
    scrollContent: {
        padding: 20,
    },
    modalSectionDescription: {
        fontSize: 20
    },
    modalSectionButton: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        backgroundColor: colors.orange[400],
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    modalSectionButtonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalSectionFooter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10
    }
});