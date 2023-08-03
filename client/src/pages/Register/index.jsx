import { VStack , FormControl ,Input ,FormLabel,Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import {message} from 'antd'
import { RegisterUser } from "../../apicalls/auth";
import { useNavigate} from 'react-router-dom'


const  Register = ()=> {
  const navigate = useNavigate()

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


    const res = RegisterUser(formData)
    if(res) navigate('/login')
    
  
  

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
}

export default Register;
