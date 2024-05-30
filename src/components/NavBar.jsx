import logo from "./images/LogoFitnessApp.png";
import { HStack, Tooltip, IconButton, Image } from "@chakra-ui/react";
import { GiStrong } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import PathName from "./PathName";
import AuthenticationButton from "./authentication/AuthenticationButton";

function NavBar() {
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        bg={"black"}
        p="10px"
        maxH="150px"
      >
        <HStack>
          <Link to="/">
            <Image boxSize="150px" src={logo} />
          </Link>
        </HStack>
        <HStack color={"white"}>
          <p style={{ fontSize: "50px" }}>
            <PathName />
          </p>
        </HStack>
        <HStack>
          <AuthenticationButton />
          <Tooltip label="Workouts">
            <Link to="/workouts">
              <IconButton
                mr={5}
                backgroundColor={"#1C971A"}
                color={"white"}
                width="55px"
                height="55px"
                icon={<GiStrong size="35px" />}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Profile">
            <Link to="/profile">
              <IconButton
                backgroundColor={"#1C971A"}
                color={"white"}
                width="55px"
                height="55px"
                size="500px"
                icon={<CgProfile size="35px" />}
              />
            </Link>
          </Tooltip>
        </HStack>
      </HStack>
    </>
  );
}

export default NavBar;
