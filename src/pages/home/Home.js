import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromSession } from "../../services/storage/SessionStorage";
import { BreadCrumb } from "../../components/core";
import { ModalLoader } from "../../components/core";
import { Input } from "../../components/core";

export const Home = () => {
  const navigate = useNavigate();
  const loginData = getFromSession("loginData");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const dummyHotels = [
    {
      id: 1,
      hotelname: "Taj",
      img: "",
      description: "",
      Address: "dgl",
    },
    {
      id: 2,
      hotelname: "Arvind Hotel ",
      img: "",
      description: "",
      Address: "covai",
    },
    {
      id: 3,
      hotelname: "Blue star",
      img: "",
      description: "",
      Address: "salem",
    },

    {
      id: 4,
      hotelname: "Bridgewasi Hotel",
      img: "",
      description: "",
      Address: "palani",
    },
  ];

  const [hotel1, setHotel1] = React.useState({
    id: null,
    name: "",
    Address: "",
    AggNo: null,
  });

  const hotelDataHandler = (id, name, Address) => {
    setHotel1({ id, name, Address, AggNo: id });
  };

  return (
    <div className="fixed-container bg-white px-sm-5 px-2 py-2">
      {isLoading && <ModalLoader open={isLoading} content={loadingText} />}
      <BreadCrumb breadCrumbItems={breadCrumbItems} />
      <span className="h4 text-grey1">Hotels</span>

      <div className="d-flex">
        <div className="card p-2 m-2">
          {" "}
          Hotel Details
          <Input
            placeholder="Hotelname"
            value={hotel1.name}
            label="Enter the Hotel name"
          ></Input>
          <Input
            placeholder="Address"
            value={hotel1.Address}
            label="Address"
          ></Input>
          <Input
            placeholder="Aggreement No"
            value={hotel1.AggNo}
            label="Aggreement Number "
          ></Input>
        </div>

        {dummyHotels.map((data, id) => (
          <div
            key={id}
            onClick={() => {
              hotelDataHandler(data.id, data.hotelname, data.Address);
            }}
            className="card m-3 p-5 cursor-pointer"
          >
            <h5>{data.hotelname}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const breadCrumbItems = [
  {
    title: "Lion Group",
    link: "/home",
  },
  {
    title: "Hotels",
    link: 1,
  },
];
