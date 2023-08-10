import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { ShowLoading ,HideLoading} from "../../redux/loadersSlice";
import { axiosInstance } from "../../apicalls";
import { message } from "antd";


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      dispatch(ShowLoading())
      const { data } = await axiosInstance.post("/auth/register", formData);
      dispatch(HideLoading())
      if (data) {
        message.success(data.message);
        navigate("/login"); 
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error("user exists");
    }

  
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" ref={nameRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" ref={emailRef} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef} />
          </FormControl>
          <Text>
        Already a User ?{" "}
        <Link  to="/login">
          Login Here
        </Link>
        </Text>
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default Register;
