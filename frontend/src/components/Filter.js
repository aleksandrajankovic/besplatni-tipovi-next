"use client";
import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import filterTips from "../utilis/filterTipovi";
import filterPretrage from "../utilis/FilterPretrage";
import Home from "../modules/Home"; // Dodajemo `Home` direktno ovde

const Filter = ({ tips }) => {
  const [currentFilter, setCurrentFilter] = useState("Svi");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTips, setFilteredTips] = useState(tips); // Kreiramo stanje za filtrirane podatke

  useEffect(() => {
    let filtered = filterPretrage(tips, searchTerm);
    filtered = filterTips(filtered, currentFilter);
    setFilteredTips(filtered);
  }, [currentFilter, searchTerm, tips]);

  return (
    <>
    <div className="mb-3 column home-wrapper">
    <div className="flex">
      <MDBInput
        label="Pretraga"
        type="text"
        id="pretraga"
        value={searchTerm}
        icon="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        contrast
      />
     
        <MDBBtn color="light" rippleColor="dark" onClick={() => setCurrentFilter("Svi")}>
          Svi
        </MDBBtn>
        <MDBBtn color="light" rippleColor="dark" onClick={() => setCurrentFilter("Aktivni")}>
          Aktivni
        </MDBBtn>
        <MDBBtn color="light" rippleColor="dark" onClick={() => setCurrentFilter("Istekli")}>
          Istekli
        </MDBBtn>
      </div>
      </div>
      {/* Prosleđujemo `filteredTips` u `Home` komponentu */}

      <Home fetchedTips={filteredTips} />
      </>
  
  );
};

export default Filter;
