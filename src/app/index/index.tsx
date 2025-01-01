import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>
                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={40}/>
                </TouchableOpacity> 
            </View>
            <View style={styles.main}>
                <View style={styles.card}>
                    <View style={styles.cardTitleBar}> 
                        <Text style={styles.cardTitle}>
                            Título da anotação
                        </Text>
                        <TouchableOpacity>
                            <MaterialIcons name='more-vert' size={23} />
                        </TouchableOpacity> 
                    </View>
                    <Text style={styles.cardDescription}>
                        Descrição da anotação
                    </Text>
                </View>
            </View>
        </View>
    )
}