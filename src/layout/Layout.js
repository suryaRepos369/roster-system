import React from "react";
import {TopHeader} from "../components/layout/header/TopHeader";
import {BottomHeader} from "../components/layout/header/BottomHeader";
import {Footer} from "../components/layout/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';

export const Layout = (props) =>{
  let { isActive, handleLoginValue } = props;
  let { footer, topHeader, bottomHeader, noHeaderColor } = isActive;
  return (
    <div>
      <div>
        {topHeader && (
          <TopHeader
            noHeaderColor={noHeaderColor}
            handleLoginValue={(data) => handleLoginValue(data)}
          />
        )}
        {bottomHeader && (
          <BottomHeader
            noHeaderColor={noHeaderColor}
            handleLoginValue={data => handleLoginValue(data)}
          />
        )}
        <ToastContainer />
      </div>
      {props.children}
      {footer && <Footer />}
    </div>
  );
}
