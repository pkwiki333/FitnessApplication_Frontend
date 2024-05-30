import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthenticationButton() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    const { picture } = user;
    return (
      <div className="d-flex flex-row align-items-center me-3">
        <Box width={"60px"} mr="20px">
          <img src={picture} alt="" className="rounded" />
        </Box>

        <div>
          <LogoutButton />
        </div>
      </div>
    );
  }

  return <LoginButton />;
}
