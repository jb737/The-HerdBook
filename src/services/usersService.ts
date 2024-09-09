import httpClient from "../httpClient";
import Animal from "../models/Animal";

const BASE_PATH = "/users";

const usersService = {
    getUserAnimals: async(userId: number): Promise<Animal[]> => {
        const response = await httpClient.get(`${BASE_PATH}/${userId}/animals`);
        return response.data
    },
};

export default usersService;