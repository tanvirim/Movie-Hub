import { VStack, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import React, { useEffect } from "react"; // Don't forget to import useEffect
import { LoginUser } from "../../apicalls/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShowLoading , HideLoading } from "../../redux/loadersSlice";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(ShowLoading())
      await LoginUser(formData);
    dispatch(HideLoading())
  }
   
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []); // Don't forget to close the parenthesis here

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
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </VStack>
      </form>
    </div>
  );
}

export default Login;
