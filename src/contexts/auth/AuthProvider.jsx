import { AuthContext } from "./AuthContext";
import { useState } from "react";

function AuthProvider({ children }) {
  const quantity = localStorage.getItem("quantity-products");
  const [quantityProducts, setQuantityProducts] = useState(Number(quantity));
  localStorage.setItem("quantity-products", quantityProducts);
  const saveTokenAndUserId = (data) => {
    localStorage.setItem("token-access", data.token);
    localStorage.setItem("user-access", data.user_id);
  };

  return <AuthContext.Provider value={{ saveTokenAndUserId, setQuantityProducts }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
