import { BrowserRouter, Route, Routes } from "react-router-dom";
import './stylesheets/alignments.css'
import './stylesheets/custom.css'
// import './stylesheets/form-elements.css'
import './stylesheets/sizes.css'
import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import {  useSelector } from "react-redux";

function App() {

  const {loading} = useSelector((state) => state.loaders)

  return (
<>
{loading && 
  <div className="loader-parent"> 
    <div className="loader"></div>
  </div>
}


<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute> <Home/></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
