import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Conta from "../components/account/Conta";
import Footer from "../components/Footer";
import Login from "../components/Login/Login";
import { UserStorage } from "../Hooks/UserContext";
import ProtectedRouter from "../Helper/ProtectedRouter";
import Photo from "../components/account/photo/Photo";
import UserProfile from "../user/UserProfile";
import NotFound from "../components/account/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={<ProtectedRouter>
                <Conta/>
              </ProtectedRouter>}
            />
            <Route path="foto/:id" element={<Photo/>}/>
            <Route path='perfil/:user' element={<UserProfile/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
