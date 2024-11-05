"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBCardTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardText,
} from "mdb-react-ui-kit";
import TipComments from "./TipComments";
import moment from "moment";
import useTipActions from "../utilis/tipActions";
import Popup from "../utilis/updateDelete";
import { Link } from "react-router-dom";
import TipStatusInfo from "../utilis/tipStatusInfo";
import { Tooltip } from "react-tooltip";

const TipModal = ({
  isActive,
  tipDate,
  timeRemaining,
  sport,
  country,
  league,
  rival1,
  rival2,
  tipsAndQuotes,
  tipsAndQuotesLink,
  description,
  likeCount,
  dislikeCount,
  closeModal,
  centredModal,
  user,
  _id,
  isSuccess,
  isFailed,
  setIsSuccess,
  setIsFailed,
}) => {
  const { likeButton, dislikeButton } = useTipActions();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    console.log("TipModal opened", { _id, centredModal });
  }, [centredModal, _id]);

  const handleModalClick = (event) => {
    if (event.target.classList.contains("flex-i")) {
      closeModal();
    }
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const handleDelete = (id) => {
    if (window.confirm("Da li ste sigurni da želite da obrišete tip?")) {
      dispatch(deleteTip({ id, toast }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupRef]);

  return (
    <>
  
           <MDBModal tabIndex="-1" open={centredModal} onHide={closeModal}>
          <div className="flex-i" onClick={handleModalClick}>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader className="flex-spaceB">
                  <div>
                    <span className={isActive ? "greenLabel" : "redLabel"}>
                      {isActive ? "Active" : "Expired"}
                    </span>
                  </div>
                  {user?.result?.role === "admin" && (
                    <img
                      src="/dots-vertical.png"
                      alt="Options"
                      onClick={togglePopup}
                    />
                  )}
                </MDBModalHeader>

                <MDBModalBody>
                  <div className="bigmodal-container">
                    <MDBCardTitle className="flex-start mb-3">
                      <div className="flex">
                        <img src="/calendar.svg" alt="Calendar icon" />
                        <p className="time-text">
                          {moment(tipDate).format("DD.MM.YYYY")}
                        </p>
                      </div>
                      <div className="flex">
                        <img src="/Icon.svg" alt="Time icon" />
                        <p className="time-text">
                          {timeRemaining
                            ? `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m`
                            : "Utakmica je završena"}
                        </p>
                      </div>
                      {isPopupOpen && (
                        <div ref={popupRef} className="popup-position">
                          <Popup>
                            <div className="flex popup-text">
                              <img src="/user-01.png" alt="User icon" />
                              <a href="#" onClick={() => handleDelete(_id)}>
                                Izbriši
                              </a>
                            </div>
                            <div className="flex popup-text">
                              <img src="/settings-01.png" alt="Settings icon" />
                              <Link to={`/editTip/${_id}`}> Ažuriraj</Link>
                            </div>
                          </Popup>
                        </div>
                      )}
                    </MDBCardTitle>
                    <MDBCardTitle>
                      <span>{sport} - {country} - {league}</span>
                    </MDBCardTitle>
                    <div className="box">
                      <div className="flex-spaceB">
                        <MDBCardText>{rival1}</MDBCardText>
                        <MDBCardText>{rival2}</MDBCardText>
                      </div>
                    </div>
                    <div className="col-md-12 links flex-start mb-2">
                      <p>
                        Naš tip:
                        <span>
                          {tipsAndQuotesLink ? (
                            <a
                              href={tipsAndQuotesLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="my-anchor-element-class"
                            >
                              {tipsAndQuotes}
                            </a>
                          ) : (
                            tipsAndQuotes
                          )}
                        </span>
                        <Tooltip
                          anchorSelect=".my-anchor-element-class"
                          content="Posetite meridianbet.rs"
                        />
                      </p>
                      {!isActive && (
                        <TipStatusInfo isSuccess={isSuccess} isFailed={isFailed} />
                      )}
                    </div>
                    <p className="decription">{description}</p>
                  </div>
                </MDBModalBody>
                <MDBModalFooter className="flex-spaceB">
                  <div className="flex space-1 p-8">
                    {likeButton(likeCount, _id)}
                    {dislikeButton(dislikeCount, _id)}
                  </div>
                  <button onClick={closeModal} className="btn-style">
                    Close
                  </button>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
            <TipComments tipId={_id} />
          </div>
        </MDBModal>
      
    </>
  );
};

export default TipModal;
