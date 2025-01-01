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
        padding: 10
    },
    card: {
        alignItems: "flex-start",
        gap: 10,
        backgroundColor: colors.orange[300],
        borderRadius: 10,
        padding: 10
    },
    cardTitleBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '400'
    },
    cardMenuIcon: {
        
    },
    cardDescription: {
        fontSize: 17
    }
});