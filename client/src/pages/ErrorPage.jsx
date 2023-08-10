import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    
    const error = useRouteError()

  return (


<>
<NavBar/>
<Box textAlign="center" py={20} px={8}>
      <Heading as="h1" size="2xl" mb={4}>
        Oops, something went wrong!
      </Heading>
      { isRouteErrorResponse(error) ? (
        <>
          <Text fontSize="lg" mb={8}>
            The page you are trying to access does not exist.
          </Text>

        </>
      ) : (
        <>
          <Text fontSize="lg" mb={8}>
            An unexpected error occurred. Please try again later.
          </Text>
          <Button colorScheme="teal" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
        </>
      )}
    </Box></>
  );
};

export default ErrorPage;