import React, { useEffect, useState } from "react";
import PoliticianForm from "./PoliticianForm";
import PoliticianList from "./PoliticianList";
import axios from "axios";

function Politicians() {
    const [politicians, setPoliticians] = useState([]);

    async function getPoliticians() {
        // const politicianRes = await axios.get("http://localhost:5000/politician/")
        const politicianRes = await axios.get("https://mern-auth-server-8y95.onrender.com/politician/")
        setPoliticians(politicianRes.data);
    }

    useEffect(() => {
        getPoliticians();
    }, []);

    return (
        <div>
            <PoliticianForm getPoliticians={getPoliticians} />
            <PoliticianList politicians={politicians} />
        </div>
    );
};

export default Politicians;
