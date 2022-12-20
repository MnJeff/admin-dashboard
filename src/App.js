import Home from "./pages/home/Home";
import Khachhang from "./pages/Khachhang/Khachhang"
import User from "./pages/user/User"
import Login from "./pages/login/Login";
import ListTour from "./pages/list/ListTour";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Khachsan from "./pages/khachsan/khachsan";
import Qlkhachsan from "./pages/qlkhachsan/Qlkhachsan";
import Plane from "./pages/maybay/plane";
import Tx from "./pages/tx/tx";
import News from "./pages/news/news";

function App() {


  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children: <Navigate to="/login" />
    
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/"><Route path="login" element={<Login />} />
            <Route index element={<RequireAuth> <Home /> </RequireAuth>} />
            <Route path="users">
              <Route index element={<RequireAuth> <Khachhang /> </RequireAuth>}/></Route>
            <Route path="hotel"><Route index element={<RequireAuth><Khachsan /></RequireAuth>}/></Route>
            <Route path="hotel-manager"><Route index element={<RequireAuth><Qlkhachsan /></RequireAuth>}/></Route>
            <Route path="plane"><Route index element={<RequireAuth><Plane /></RequireAuth>}/></Route>
            <Route path="tour"> <Route index element={<RequireAuth><ListTour /></RequireAuth>}/></Route>
            <Route path="new-manager"> <Route index element={<RequireAuth><News /></RequireAuth>}/></Route>
            <Route path="car-rent">
              <Route
                index
                element={
                  <RequireAuth>
                    <Tx />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

