import { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      dispatch(ShowLoading());
      const res = await GetCurrentUser();
      dispatch(SetUser(res));
    } catch (error) {
      dispatch(SetUser(null));
      message.error(error.message);
      navigate("/login");
    }
    dispatch(HideLoading());
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, [localStorage]);

  return user ? <Box padding="1.5rem">{children}</Box> : null;
};

export default ProtectedRoute;
