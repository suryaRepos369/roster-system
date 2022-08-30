import React from "react";
export const Footer = () => {
  return (
    <footer className="footer px-3 bg-primary w-100 text-white para-md--bold  d-flex flex-column align-items-center justify-content-center">
      <div>
        <div>
          <a href="#" className=" text-white cursor-pointer">
            About us
          </a>{" "}
          |{" "}
          <a href="#" className="text-white cursor-pointer">
            Careers
          </a>{" "}
          | <a className="text-white cursor-pointer">Press Release</a> |{" "}
          <a className="text-white cursor-pointer">Terms & Conditions</a> |{" "}
          <a className="text-white cursor-pointer">Privacy policy</a> |{" "}
          <a className="text-white cursor-pointer">Contact us</a>
        </div>
        <div className="text-center">
          © Copyright by Lion Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
