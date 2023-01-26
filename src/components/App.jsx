import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
