import {
  VStack,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../apicalls/auth";
import { useNavigate } from "react-router-dom";
import { ShowLoading ,HideLoading} from "../../redux/loadersSlice";


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
    dispatch(ShowLoading())
    await RegisterUser(formData);
    dispatch(HideLoading())
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
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
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default Register;
