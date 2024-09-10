import httpClient from "../httpClient";
import Animal from "../models/Animal";

const BASE_PATH = "/animals";

const animalsService = {

    getAllAnimals: async(): Promise<Animal[]> => {
        const response = await httpClient.get(BASE_PATH);
        return response.data;
    },

    getAnimalById: async(animalId: number): Promise<Animal> => {
        const response = await httpClient.get(`${BASE_PATH}/${animalId}`);
        return response.data;
    },

    createAnimal: async(animal: Animal): Promise<Animal> => {
        const response = await httpClient.post(BASE_PATH, animal);
        return response.data;
    },

    deleteAnimal: (animalId: number):Promise<void> => {
        return httpClient.delete(`${BASE_PATH}/${animalId}`);
    },
    
    updateAnimal: async(animal: Animal): Promise<Animal> => {
        const response = await httpClient.put(`${BASE_PATH}/${animal.id}`, animal);
        return response.data;
    },
    
};

export default animalsService;