import {axiosInstance} from './index'
import {message} from 'antd'
// Register a new user
export const RegisterUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/auth/register", payload);
        if(response) message.success("User Created Successfully")
        return response.data;
    } catch (error) {
        if(error) message.error("User exist")
        return error.response;
    }
};

// Login a user
export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/auth/login", payload);
        return response.data; 
    } catch (error) {
        return error.response;
    }
}

// // Get current user
// export const GetCurrentUser = async () => {
//     try {
//         const response = await axiosInstance.get("/api/users/get-current-user");
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }