import React, { useState, useEffect } from "react";
import Hamburger from "../../../assets/images/hamburger.png";
import Logo from "../../../assets/images/lion_air_logo.png";
import Signup from "../../../assets/icon/signup_icon.svg";
import Login from "../../../assets/icon/login-icon.svg";
import FloatingHeader from "./floating-header/FloatingHeader";
import { Notifications } from "../../common/notifications/Notifications";
import {
  getFromSession,
  saveToSession,
} from "../../../services/storage/SessionStorage";
import { useLocation } from "react-router-dom";

export const BottomHeader = (props) => {
  const { noHeaderColor, handleLoginValue } = props;
  const location = useLocation();
  const [banner, setBanner] = useState(false);
  const loginData = getFromSession("loginData");
  const [menuList, setMenuList] = useState([
    location.pathname == "/"
      ? { Title: "Register", icon: Signup, link: "/new-registration" }
      : { Title: "Sign in", icon: Login, link: "/" },
  ]);

  

  const hamburger = (
    <img
      className="ms-4 cursor-pointer"
      onClick={() => setBanner(!banner)}
      src={Hamburger}
    />
  );

  return (
    <>
      <div
        className={`${
          noHeaderColor ? "" : "bg-primary"
        } pt-4 px-sm-5 px-2 d-flex justify-content-between align-items-center`}
      >
        <img className="logo" src={Logo} />
        <div className="d-flex align-items-center">
          <Notifications pathname={location.pathname} loginData={loginData} />
          {hamburger}
        </div>
      </div>

      <FloatingHeader
        setBanner={setBanner}
        banner={banner}
        menuList={menuList}
        handleLoginValue={handleLoginValue}
      />
    </>
  );
}
