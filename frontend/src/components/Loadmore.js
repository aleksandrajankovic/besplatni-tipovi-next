"use client";

import React from "react";
import {
  
  MDBBtn,
 
} from "mdb-react-ui-kit";
const Loadmore = ({ onLoadMore }) => {
  return (
  <div className="flex g-3">
          <MDBBtn color="light" rippleColor="dark" onClick={onLoadMore}>
            Učitaj više
          </MDBBtn>
        </div>
  );
};

export default Loadmore;