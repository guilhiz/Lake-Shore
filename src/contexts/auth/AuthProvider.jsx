import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const saveTokenAndUserId = (data) => {
    localStorage.setItem("token-access", data.token);
    localStorage.setItem("user-access", data.user_id);
  };

  return <AuthContext.Provider value={{ saveTokenAndUserId }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
