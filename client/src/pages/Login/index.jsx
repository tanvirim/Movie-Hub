import { VStack, FormControl, Input, FormLabel, Button,Text } from "@chakra-ui/react";
import React from "react"; // Don't forget to import useEffect

import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/loadersSlice";
import { axiosInstance } from "../../apicalls";
import { message } from "antd";
import {  Link} from "react-router-dom";


function Login() {
  

  
  const dispatch = useDispatch();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/auth/login", formData);
      dispatch(HideLoading());

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        window.location.href="/"
      }

    } catch (error) {
  
      dispatch(HideLoading());
      if (error.code === "ERR_BAD_RESPONSE") {
        message.error("incorrect password");
      }

      
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
          </FormControl>
          <Text>
        Not a User ?{" "}
        <Link  to="/register">
          Register Here
        </Link>
      </Text>
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Login;
