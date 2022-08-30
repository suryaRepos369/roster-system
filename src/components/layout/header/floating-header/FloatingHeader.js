import React from "react";
import CloseIcon from "../../../../assets/icon/floating_header_close.svg";
import OutsideClickHandler from "react-outside-click-handler";
import {
  removeFromSession,
  saveToSession,
} from "../../../../services/storage/SessionStorage";
import { useNavigate } from "react-router-dom";

const FloatingHeader = (props) => {
  let { setBanner, banner, menuList, handleLoginValue } = props;
  let navigate = useNavigate();

  const closeFloatingNavBar = () => {
    setBanner(false);
  };

  const handleClickOutside = () => {
    if (banner) {
      setBanner(false);
    }
  };

  const handleRoute = (path, Title) => {
    if (path == "/") {
      handleLoginValue(null);
    }
    navigate(path);
    setBanner(false);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleClickOutside();
      }}
    >
      <div
        className="floating-header-container"
        style={{ right: banner ? "0" : "-420px", transition: "0.5s" }}
      >
        <div className="p-5">
          <div className="text-end">
            <img
              className="cursor-pointer "
              src={CloseIcon}
              alt="close"
              onClick={closeFloatingNavBar}
            />
          </div>
          <div className="floating-header-contents-section mt-5">
            <div className="overflow-auto mh-vh-80">
              {menuList.map((menu, key) => {
                let path = menu?.link;
                return (
                  <React.Fragment key={`navItem_${key}  `}>
                    <div
                      className={`${
                        menu?.disable ? "cursor-not-allowed" : "cursor-pointer"
                      } p-2 h5 text-white d-flex align-items-center`}
                      onClick={() =>
                        !menu?.disable && handleRoute(path, menu.Title)
                      }
                      data-bs-toggle="tooltip"
                      title={menu?.disable ? "Coming Soon" : undefined}
                      data-bs-placement="top"
                    >
                      <img src={menu?.icon} />
                      <span className="px-4">{menu?.Title}</span>
                    </div>
                    <div className="mt-1 bg-white divide-menu w-100" />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default FloatingHeader;
