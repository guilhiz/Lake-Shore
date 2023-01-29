import { useEffect, useState } from "react";
import { api } from "../../config/api";

export const useProducts = () => {
  const [furniture, setFurniture] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [clothes, setClothes] = useState(null);
  const [services, setServices] = useState(null);

  const productsByCategory = async () => {
    const token = localStorage.getItem("token-access");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const resF = await api.get("products/moveis", config);
      const resE = await api.get("products/eletronicos", config);
      const resC = await api.get("products/vestuario", config);
      const resS = await api.get("products/serviços", config);

      setElectronics(resE.data);
      setServices(resS.data);
      setFurniture(resF.data);
      setClothes(resC.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productsByCategory();
  }, []);

  return { furniture, electronics, clothes, services };
};
