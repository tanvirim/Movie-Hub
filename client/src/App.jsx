import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

import './stylesheets/alignments.css'
import './stylesheets/custom.css'
import './stylesheets/form-elements.css'
import './stylesheets/sizes.css'
import './stylesheets/custom.css'
import './stylesheets/theme.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
