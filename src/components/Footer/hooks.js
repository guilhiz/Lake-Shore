import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const useFooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
};