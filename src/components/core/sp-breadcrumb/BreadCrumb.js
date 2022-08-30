import React from "react";
import ArrowRight from "../../../assets/icon/arrow_right.svg";
import { useNavigate } from "react-router-dom";

export const BreadCrumb = ({ breadCrumbItems = [] }) => {
  let navigate = useNavigate();

  return (
    <div className=" para-md--bold  text-grey1 d-flex align-items-center py-1">
      {breadCrumbItems.map((item, index) => (
        <React.Fragment key={`breadcrumb_${index}`}>
          <span className="sp-breadcrumb" onClick={() => navigate(item?.link)}>
            {item?.title}
          </span>
          {index + 1 !== breadCrumbItems?.length && (
            <img className="p-3" src={ArrowRight} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
