"use client";

import React, { useState } from "react";
import {

  MDBBtn,
  MDBInput,
  
} from "mdb-react-ui-kit";

import filterTips from "../utilis/filterTipovi";
import filterPretrage from "../utilis/FilterPretrage";

const Filter = ({ tips }) => {
  const [currentFilter, setCurrentFilter] = useState("Svi");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  let filteredTips = filterPretrage(tips, searchTerm);
  filteredTips = filterTips(filteredTips, currentFilter);

  return (
    <div className="mb-3 flex column">
    <MDBInput
      label="Pretraga"
      type="text"
      id="pretraga"
      value={searchTerm}
      icon="search"
      onChange={(e) => handleSearch(e.target.value)}
      contrast
    />
    <div className="flex">
      <MDBBtn
        color="light"
        rippleColor="dark"
        onClick={() => handleFilter("Svi")}
      >
        Svi
      </MDBBtn>
      <MDBBtn
        color="light"
        rippleColor="dark"
        onClick={() => handleFilter("Aktivni")}
      >
        Aktivni
      </MDBBtn>
      <MDBBtn
        color="light"
        rippleColor="dark"
        onClick={() => handleFilter("Istekli")}
      >
        Istekli
      </MDBBtn>
    </div>
  </div>
  );
};

export default Filter;
