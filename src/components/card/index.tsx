import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type CardProps = TouchableOpacityProps & {
    title: string
    descriprion: string
};

export default function Card({title, descriprion, ...rest}: CardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitleBar}>
                <Text style={styles.cardTitle}>
                    {title}
                </Text>
                <TouchableOpacity {...rest}>
                    <MaterialIcons name='more-vert' size={23} style={styles.menu}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.cardDescription}>
                {descriprion}
            </Text>
        </View>
    )
}