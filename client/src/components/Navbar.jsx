import { Flex, Text, IconButton, useColorMode, HStack } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { Link, useNavigate } from "react-router-dom";

// import { SetUser } from "../redux/usersSlice";

const NavBar = () => {
    const navigate  = useNavigate()
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users);
    const { colorMode, toggleColorMode } = useColorMode();
  
    const handleLogout = () => {
        navigate("/login")
      localStorage.removeItem("token");
      dispatch(SetUser(null));
    };

    const handleUser = ()=>{
        
        if(user.data.isAdmin){
            navigate("/admin")
        }else{
            navigate("/profile")

        }}
    
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"

      >
        <Text fontSize="xl" fontWeight="bold">
          <Link to="/">CineWorld</Link>
        </Text>
        <HStack>
          <IconButton
            icon={<AiOutlineUser />}
            aria-label="User Profile"
            variant="ghost"
            mr={2}
          />
          <Text 
          cursor='pointer'
          onClick={handleUser
          }
          >
            {user && user.data.name}</Text>
{user &&           <IconButton
            icon={<AiOutlineLogout />}
            aria-label="Logout"
            variant="ghost"
            onClick={handleLogout} // Call the handleDelete function when logout button is clicked
            ml={2}
          />}
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
        }
  
  
export default NavBar;
