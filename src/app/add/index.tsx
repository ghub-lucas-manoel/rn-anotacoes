import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Add() {
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
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}