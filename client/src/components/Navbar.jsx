import { Flex, Text, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
// import { SetUser } from "../redux/usersSlice";

const NavBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);
    const { colorMode, toggleColorMode } = useColorMode();
  
    const handleDelete = () => {
      localStorage.removeItem("token");
      dispatch(SetUser(null));
    };
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          CineWorld
        </Text>
        <HStack>
          <IconButton
            icon={<AiOutlineUser />}
            aria-label="User Profile"
            variant="ghost"
            mr={2}
          />
          <Text>{user && user.data.name}</Text>
          <IconButton
            icon={<AiOutlineLogout />}
            aria-label="Logout"
            variant="ghost"
            onClick={handleDelete} // Call the handleDelete function when logout button is clicked
            ml={2}
          />
          <IconButton
            icon={colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
            aria-label="Toggle Dark Mode"
            variant="ghost"
            onClick={toggleColorMode}
            ml={2}
          />
        </HStack>
      </Flex>
    );
  };
  
export default NavBar;
