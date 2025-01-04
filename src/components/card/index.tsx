import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type CardProps = TouchableOpacityProps;

export default function Card({...rest}: CardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleBar}>
                <Text style={styles.cardTitle}>
                    Título da anotação
                </Text>
                <TouchableOpacity {...rest}>
                    <MaterialIcons name='more-vert' size={23} />
                </TouchableOpacity>
            </View>
            <Text style={styles.cardDescription}>
                Descrição da anotação
            </Text>
        </View>
    )
}