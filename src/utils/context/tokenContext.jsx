import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokenLocal, setTokenLocal] = useState(
    localStorage.getItem("accessToken") ?? null
  );
  const [tokenLocalGrandprize, setTokenLocalGrandprize] = useState(
    localStorage.getItem("accessTokenGrandprize") ?? null
  );
  const [tokenLocalFixwin, setTokenLocalFixwin] = useState(
    localStorage.getItem("accessTokenFixwin") ?? null
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setTokenLocal(storedToken);
    }
    const storedTokenGrandprize = localStorage.getItem("accessTokenGrandprize");
    if (storedTokenGrandprize) {
      setTokenLocalGrandprize(storedTokenGrandprize);
    }
    const storedTokenFixwin = localStorage.getItem("accessTokenFixwin");
    if (storedTokenFixwin) {
      setTokenLocalGrandprize(storedTokenFixwin);
    }
  }, []);

  const saveToken = (newToken) => {
    setTokenLocal(newToken);
    localStorage.setItem("accessToken", newToken);
  };

  const saveTokenGrandprize = (newTokenGrandprize) => {
    setTokenLocalGrandprize(newTokenGrandprize);
    localStorage.setItem("accessTokenGrandprize", newTokenGrandprize);
  };

  const saveTokenFixwin = (newTokenFixwin) => {
    setTokenLocalFixwin(newTokenFixwin);
    localStorage.setItem("accessTokenFixwin", newTokenFixwin);
  };

  return (
    <TokenContext.Provider
      value={{
        tokenLocal,
        saveToken,
        tokenLocalGrandprize,
        saveTokenGrandprize,
        tokenLocalFixwin,
        saveTokenFixwin,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
