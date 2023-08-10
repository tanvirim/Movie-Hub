import { Route, Routes } from "react-router-dom";
import './stylesheets/alignments.css'
import './stylesheets/custom.css'
import './stylesheets/form-elements.css'
import './stylesheets/sizes.css'
import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";

import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NavBar from "./components/NavBar";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <>
      {loading && 
        <div className="loader-parent"> 
          <div className="loader"></div>
        </div>
      }

        <NavBar/>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home/></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<ProtectedRoute> <Profile/></ProtectedRoute>} />
          <Route path="admin" element={<ProtectedRoute> <Admin/></ProtectedRoute>} />
        </Routes>
    </>
  );
}

export default App;
