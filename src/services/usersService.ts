import httpClient from "../httpClient";
import Animal from "../models/Animal";
import CreateUserRequest from "../models/requests/CreateUserRequest";
import User from "../models/User";

const BASE_PATH = "/users";

const usersService = {
    getUserAnimals: async(userId: string): Promise<Animal[]> => {
        const response = await httpClient.get(`${BASE_PATH}/${userId}/animals`);
        return response.data
    },

    signup: async(user: CreateUserRequest): Promise<string> => {
        const response = await httpClient.post(BASE_PATH, user);
        return response.data.id;
    },

    login: async (email: string, password: string): Promise<string> => {
        const response = await httpClient.post(`${BASE_PATH}/login`, {
            email,
            password,
        });
        return response.data.id;
    },
};

export default usersService;