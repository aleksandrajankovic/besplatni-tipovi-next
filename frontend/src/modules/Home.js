"use client";
import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import TipCard from "../components/TipCard";
import Loadmore from "../components/Loadmore";

const Home = ({ fetchedTips }) => {

  const [tipsToShow, setTipsToShow] = useState(6);
  const tips = fetchedTips;


  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        {tips.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            Nema pronađenih tipova
          </MDBTypography>
        )}
      </MDBRow>
      <MDBRow className="row-cols-1 row-cols-md-3 g-3">
        {tips
          .sort(
            (tip1, tip2) =>
              new Date(tip2.createdAt) - new Date(tip1.createdAt)
          )
          .slice(0, tipsToShow)
          .map((item, index) => (
            <div key={index}>
              <TipCard {...item} />
            </div>
          ))}
      </MDBRow>
      <Loadmore />
    </MDBContainer>
  );
};

export default Home;
