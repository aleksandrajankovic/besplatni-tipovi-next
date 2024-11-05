"use client";
import React from "react";
import Image from "next/image";
import CheckCircle from "../public/CheckCircle.png";
import XCircle from "../public/XCircle.png";

const TipStatusInfo = ({ isSuccess, isFailed }) => {
  return (
    <div>
      {(isSuccess || isFailed) && (
        <div>
          {isSuccess && (
            <div className="flex g1">
              <Image className="statusImg" src={CheckCircle} alt="success" />
              <p className="statusText" style={{ color: "#17BB00" }}>
                Dobitan
              </p>
            </div>
          )}
          {isFailed && (
            <div className="flex g1">
              <Image className="statusImg" src={XCircle} alt="failed" />
              <p className="statusText" style={{ color: "#D11101" }}>
                Gubitan
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TipStatusInfo;
