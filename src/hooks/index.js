import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const useFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});


export const useAos = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
};