import {axiosInstance} from './index'
import {message} from 'antd'




export const RegisterUser = async (payload) => {
    try {
        const {data}= await axiosInstance.post("/auth/register", payload);
        if(data) {
          window.location.href = "/login";
          message.success(data.message)}
    } catch (error) {
        message.error("user exists")
        
    }
};

// Login a user
export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/auth/login", payload);
        if(response) {
          console.log( "response is" ,response)
          window.location.href = "/";
            message.success(response.data.message)
            localStorage.setItem('token', response.data.token) 
        }

    } catch (error) {
        if(error.code ==='ERR_BAD_RESPONSE'){
          message.error("incorrect password")

        }
    }
}

// Get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/current-user");
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    throw new Error("Failed to get current user.");
  }
};
