import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Card from '@/components/card';
import { useState } from 'react';

export default function Index() {
    const [showModal, setShowModal] = useState(false);

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
                        return;
                    }
                }
            ]
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>
                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={40}/>
                </TouchableOpacity> 
            </View>
            <View style={styles.main}>
                <Card onPress={() => setShowModal(true)}/>
            </View>
            <Modal transparent visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitle}>
                                Título da Anotação
                            </Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons name='exit-to-app' size={25}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionDescription}>
                                Descrição da Anotação
                            </Text>
                            <View style={styles.modalSectionFooter}>
                            <TouchableOpacity style={styles.modalSectionButton} onPress={confirmDelete}>
                                <Text style={styles.modalSectionButtonText}>
                                    Excluir
                                </Text>
                                <MaterialIcons name='delete' size={25}/>
                            </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}