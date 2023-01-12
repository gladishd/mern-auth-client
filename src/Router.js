import React, { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Navbar from "./components/layout/Navbar";
import Politicians from "./components/politicians/Politicians";
import AuthContext from "./context/AuthContext";

function Router() {

    const {loggedIn} = useContext(AuthContext);

    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<div>Home</div>} />
                {
                    loggedIn === false && (
                        <>
                            <Route exact path="/register" element={<Register />} />
                            <Route exact path="/login" element={<Login />} />
                        </>
                    )
                }
                {
                    loggedIn === true && (
                        <>
                            <Route exact path="/politician" element={<Politicians/>} />
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    );
};

export default Router;