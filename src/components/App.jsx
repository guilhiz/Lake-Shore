import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";
import Header from "./Header";
import NewProduct from '../pages/NewProduct';
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-product" element={ <NewProduct/> }/>
        <Route path="/cart" element={<Cart /> } />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
