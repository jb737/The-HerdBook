import httpClient from "../httpClient";
import Animal from "../models/Animal";

const BASE_PATH = `/animals`;

const animalsService = {

    getAllAnimals: async(): Promise<Animal[]> => {
        const response = await httpClient.get(BASE_PATH);
        return response.data;
    },

    getAnimalById: async(animalId: string): Promise<Animal> => {
        const response = await httpClient.get(`${BASE_PATH}/${animalId}`);
        return response.data;
    },

    createAnimal: async (ownerId: string, name: string, sex: string,  details?: string, importantEvents?: string, veterinaryNotes?: string ): Promise<Animal> => {
        const response = await httpClient.post(BASE_PATH, {
            ownerId,
            name,
            //herdBookName,
            sex,
            details,
            importantEvents,
            veterinaryNotes,
        });
        return response.data;
    },

    deleteAnimal: (animalId: string):Promise<void> => {
        return httpClient.delete(`${BASE_PATH}/${animalId}`);
    },
    
    updateAnimal: async(animalId: string, name: string, sex: string, details: string, veterinaryNotes: string): Promise<Animal> => {
        const response = await httpClient.put(`${BASE_PATH}/${animalId}`, {
            name,
            sex,
            details,
            veterinaryNotes,
        });
        return response.data;
    },
    
};

export default animalsService;