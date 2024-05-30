import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";
import { useCallback } from "react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(async () => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <Button
      mr={"20px"}
      type="button"
      className="btn btn-primary"
      onClick={handleLogin}
      bg="#1C971A"
      borderColor={"#1C971A"}
    >
      Log In
    </Button>
  );
}

export default LoginButton;
