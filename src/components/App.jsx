import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import Header from "./Header";
import NewProduct from '../pages/NewProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-product" element={ <NewProduct/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
