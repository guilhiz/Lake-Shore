import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path="/" element={<SignIn /> } />
                <Route path="/sign-in" />
                <Route path="/sign-up" />
            </Routes>
        </BrowserRouter>
    )
}

export default App