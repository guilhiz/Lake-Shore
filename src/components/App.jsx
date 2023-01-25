import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
