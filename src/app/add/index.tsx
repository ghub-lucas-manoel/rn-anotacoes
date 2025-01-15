import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Add() {
    function add() {
        Alert.alert(
            'Nova Anotação',
            'Anotação adicionada com sucesso.',
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        router.back()
                    }
                }
            ]
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={20} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Nova Anotação</Text>
            </View>
            <View style={styles.main}>
                <TextInput style={styles.input} placeholder="Título da Anotação"/>
                <TextInput style={styles.input} placeholder="Descrição da Anotação"/>
                <TouchableOpacity style={styles.addButton} onPress={add}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}