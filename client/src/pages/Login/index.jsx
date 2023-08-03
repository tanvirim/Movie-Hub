import { VStack, FormControl, Input, FormLabel, Button } from "@chakra-ui/react";
import React from "react";
import { LoginUser } from "../../apicalls/auth";
import { useNavigate} from 'react-router-dom'
function Login() {

  const navigate = useNavigate()
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

      const res = LoginUser(formData)
      if(res) navigate("/") 
  }

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
