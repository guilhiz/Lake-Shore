import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path="/" />
                <Route path="/sign-in" />
                <Route path="/sign-up" />
            </Routes>
        </BrowserRouter>
    )
}

export default App