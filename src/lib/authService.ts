import {apiFetch, apiPost} from "@/config/api"
import { User } from "@/types/user.type";

export const authService = {
    login: async (email: string, password: string):Promise<User> => { 
        return apiPost("/api/auth/login",{email,password});
    },
    logout : async () => {
        return apiPost("/api/auth/logout",{});
    }
};