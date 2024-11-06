import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar"

const Header = () => (
  <header className="header">
    <div>
      <div className="title">بيئة تعلم مدعمة بانترنت الأشياء</div>
      <div className="subtitle">
        إعداد 
        <div>
          <div className="">د/عايدة فاروق</div>
          <div className="">د/منال السعيد</div>
        </div>
      </div>
    </div>
    <Navbar />
  </header>
);

export default Header;
