import {axiosInstance} from './index'

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
