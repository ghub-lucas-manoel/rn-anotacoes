import AsyncStorage from "@react-native-async-storage/async-storage";

const ANOTACOES_STORAGE_KEY = "anotacoes-storage";

export type AnotacaoStorage = {
    id: string
    title: string
    description: string
}

async function save(newAnotacao: AnotacaoStorage) {
    try {
        const storage = await get();
        const updated = [...storage, newAnotacao];

        await AsyncStorage.setItem(ANOTACOES_STORAGE_KEY, JSON.stringify(updated));
        
    } catch (error) {
        throw(error);
    }
}

async function get() : Promise<AnotacaoStorage[]> {
    const storage = await AsyncStorage.getItem(ANOTACOES_STORAGE_KEY);
    const response = storage ? JSON.parse(storage) : [];

    return response;
}

async function remove(id:string) {
    const storage = await get();

    const filtered = storage.filter((anotacao) => anotacao.id != id);

    await AsyncStorage.setItem(ANOTACOES_STORAGE_KEY, JSON.stringify(filtered));
    
}

export const linkStorage = { get, save, remove }