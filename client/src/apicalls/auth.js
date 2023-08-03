import {axiosInstance} from './index'
import {message} from 'antd'




export const RegisterUser = async (payload) => {
    try {
        const {data}= await axiosInstance.post("/auth/register", payload);
        if(data) message.success(data.message)
    } catch (error) {
        message.error("user exists")
        
    }
};

// Login a user
export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/auth/login", payload);
        if(response.status === 200) {
            message.success(response.data.message)
            localStorage.setItem('token', response.data.token) 
        }

    } catch (error) {
        console.log(error)
    }
}

// Get current user
export const GetCurrentUser = async () => {
    try { 
        const response = await axiosInstance.get("/current-user");
        return response.data;
    } catch (error) {
        return error;
    }
}