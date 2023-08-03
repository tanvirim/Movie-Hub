import { useEffect, useState } from "react";
import { GetCurrentUser } from "../apicalls/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const res = await GetCurrentUser();
      if (res.success) {
        setData(res);
      } else {
        setData(null);
        message.error(res.message);
      }
    } catch (error) {
      setData(null);
      message.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return data ? <div>{children}</div> : null;
};

export default ProtectedRoute;
