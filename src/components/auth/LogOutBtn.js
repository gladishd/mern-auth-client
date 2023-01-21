import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LogOutBtn() {

    const { getLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();


    async function logOut() {
        // await axios.get("http://localhost:5000/auth/logout");
        await axios.get("https://mern-auth-server-8y95.onrender.com/auth/logout");
        await getLoggedIn();
        navigate("/");

    }

    return <button onClick={logOut}>
        Log out
    </button>;
};

export default LogOutBtn;
