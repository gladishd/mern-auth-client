import React, { useState } from "react";
import axios from "axios";

function PoliticianForm({getPoliticians}) {

    const [politicianName, setPoliticianName] = useState("");

    async function savePolitician(e) {
        e.preventDefault();

        try {
            const politicianData = {
            name: politicianName,
        }
            await axios.post("http://localhost:5000/politician/", politicianData);
            getPoliticians();
        } catch (error) {
            console.error(error);
        }
    }

    return <div>
        <form onSubmit={savePolitician}>
            <input type="text" placeholder="Politician name" onChange={(e) => {
                setPoliticianName(e.target.value);
            }}
            value={politicianName}
            />
            <button type="submit">Save new customer</button>
        </form>

    </div>;
};

export default PoliticianForm;