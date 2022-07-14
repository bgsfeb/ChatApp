import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/login/login"
import RegisterPage from "./page/register/register"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;