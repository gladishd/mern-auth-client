import React, { useEffect, useState } from "react";
import PoliticianForm from "./PoliticianForm";
import PoliticianList from "./PoliticianList";
import axios from "axios";

function Politicians() {
    const [politicians, setPoliticians] = useState([]);

    async function getPoliticians() {
        const politicianRes = await axios.get("http://localhost:5000/politician/")
        setPoliticians(politicianRes.data);
    }

    useEffect(()=> {
        getPoliticians();
    }, []);

    return (
    <div>
        <PoliticianForm getPoliticians={getPoliticians}/>
        <PoliticianList politicians={politicians} />
    </div>
    );
};

export default Politicians;