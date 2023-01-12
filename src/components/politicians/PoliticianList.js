import React from "react";


function PoliticianList({ politicians }) {
    function renderPoliticians() {
        return politicians.map((politician, i) => {
            return <li key={i}>{politician.name}</li>;
        });
    }


    return (
        <div>
            <ul>
                {renderPoliticians()}
            </ul>
        </div>
    );
}

export default PoliticianList;