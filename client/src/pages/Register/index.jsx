import { VStack , FormControl ,Input ,FormLabel,Button } from "@chakra-ui/react";
import React from "react";
import { RegisterUser } from "../../apicalls/auth";



function Register() {

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    RegisterUser(formData)

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
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>
    </form>
    
    </div>
  );
}

export default Register;
