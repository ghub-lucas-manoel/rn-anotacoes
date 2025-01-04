import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        cardDescription: {
            fontSize: 17
        }
});