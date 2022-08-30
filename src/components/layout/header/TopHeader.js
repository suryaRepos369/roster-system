import React from "react";

export const TopHeader = (props) => {
  let { noHeaderColor } = props;

  return (
    <>
      <div
        className={`px-sm-5 px-2 ${
          noHeaderColor ? "bg-highlight2" : "bg-primary"
        }  py-2 d-flex justify-content-between`}
      >
        <span className="para-sm--bold text-white">
          Please check the information of each province before traveling and
          arrive at the airport earlier for check-in and check documents, click
        </span>
      </div>
    </>
  );
}

