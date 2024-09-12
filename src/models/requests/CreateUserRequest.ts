import User from "../User";

export default interface CreateUserRequest extends User {
    password: string;
    confirmPassword: string;
}