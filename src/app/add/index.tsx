import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { linkStorage } from "@/storage/anotacao-storage";

export default function Add() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function add() {
        if (!title.trim())
            return Alert.alert('Nova Anotação', 'O título da anotação é obrigatório.');

        try {
            await linkStorage.save({
                id: new Date().getTime().toString(),
                title,
                description
            });

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
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível adicionar a Anotação. Por favor, tente novamente.');
            console.error(error);
        }
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
                <TextInput style={styles.input} placeholder="Título da Anotação" onChangeText={setTitle} />
                <TextInput style={styles.input} placeholder="Descrição da Anotação" onChangeText={setDescription} multiline={true}/>
                <TouchableOpacity style={styles.addButton} onPress={add}>
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}