import { FlatList, Alert, Image, Modal, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import Card from '@/components/card';
import { useCallback, useEffect, useState } from 'react';
import { AnotacaoStorage, linkStorage } from '@/storage/anotacao-storage';

export default function Index() {
    const [showModal, setShowModal] = useState(false);
    const [notations, setNotations] = useState<AnotacaoStorage[]>([]);
    const [notation, setNotation] = useState<AnotacaoStorage>({} as AnotacaoStorage);
    const maxModalHeight = Dimensions.get('window').height;

    function confirmDelete() {
        Alert.alert("Excluir Anotação",
            "Você realmente deseja excluir esta anotação?",
            [
                {
                    style: 'cancel',
                    text: 'Não'
                },
                {
                    text: 'Sim',
                    onPress: () => {

                        async function removeNotaton(id: string) {
                            await linkStorage.remove(notation.id);
                        }

                        removeNotaton(notation.id).catch(console.error);
                        Alert.alert("Remover Anotação", "Anotação excluída com sucesso.");
                        
                        getNotations().catch(console.error);
                        setShowModal(false);
                        return;
                    }
                }
            ]
        )
    }

    async function getNotations() {
        const resp = await linkStorage.get();
        setNotations(resp);
    }

    useEffect(() => {
        getNotations().catch(console.error);
    }, [notations])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo} />
                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <FlatList
                data={notations}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card title={item.title} descriprion={item.description} onPress={() => {
                        setNotation(item);
                        setShowModal(true);
                    }} />
                )}
                contentContainerStyle={styles.main}
            />
            <Modal transparent visible={showModal} animationType='slide' style={styles.modal}>
                <View style={[styles.modalContainer]}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderTitle}>
                            {notation.title}
                        </Text>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <MaterialIcons name='exit-to-app' size={25} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={styles.modalSection}>
                        <Text style={styles.modalSectionDescription}>
                            {notation.description}
                        </Text>
                    </ScrollView>
                    <View style={styles.modalSectionFooter}>
                        <TouchableOpacity style={styles.modalSectionButton} onPress={confirmDelete}>
                            <Text style={styles.modalSectionButtonText}>
                                Excluir
                            </Text>
                            <MaterialIcons name='delete' size={25} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}