import {ACCESS_TOKEN_KEY} from "@/constants/token/token.constant";
import Token from "@/libs/token/Token";
import {useEffect, useState} from "react";

const useTokenCheck = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (Token.getToken(ACCESS_TOKEN_KEY)) {
      setIsAuthorized(true);
    }
  }, []);

  return {isAuthorized};
};

export default useTokenCheck;
