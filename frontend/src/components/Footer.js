"use client";
import React, { useState } from "react";
import Image from 'next/image';
import logo from '../public/logo.png'
import {
  MDBFooter,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbar,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { useRouter } from "next/navigation"; 
export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth })); // postavljam usera da bude dostupan u hed komponenti
  const router = useRouter(); // Koristite useRouter da dobijete trenutnu putanju
  const { pathname } = router;
  const handleLogout = () => {
    dispatch(setLogout());
  };
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }
  return (
    <MDBFooter className="text-center p-5">
    <MDBCardText className="flex">
      <a href="/">
        {" "}
        <Image src={logo} alt="Besplatni tipovi" />
      </a>
    </MDBCardText>
    <MDBNavbar expand="lg" className="p-3">
      <MDBNavbarNav className="flex">
        <MDBNavbarItem>
          <MDBNavbarLink active aria-current="page" href="/">
            <p className="header-text">Početna</p>
          </MDBNavbarLink>
        </MDBNavbarItem>

        {user?.result?._id ? (
          <>
            <MDBNavbarItem>
              <MDBNavbarLink href="/login" className="header-text logout">
                <p className="header-text" onClick={() => handleLogout()}>
                  Izloguj se
                </p>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </>
        ) : (
          <MDBNavbarItem>
            <MDBNavbarLink href="/login" className="header-text">
              <p className="header-text">Uloguj se</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
    <div className="text-center copyright">
      © {currentYear} Sva prava zadržana
    </div>
  </MDBFooter>
  );
}
