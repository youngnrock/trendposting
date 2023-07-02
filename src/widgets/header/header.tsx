import { ReactElement } from "react";

import "./header.scss";

import ynrLogo from "../../assets/images/logo.png";

export default function Header(): ReactElement {
  return (
    <header>
      <img id="header-logo" src={ynrLogo} onClick={home} />
      <button
        id="header-category-button"
        className="primary large"
        onClick={setCategoryState}
      >Categories</button>
      <ul id="header-category">
        <li className="header-category-item">Category A</li>
        <li className="header-category-item">Category B</li>
        <li className="header-category-item">Category C</li>
        <li className="header-category-item">Category D</li>
      </ul>
    </header>
  );
}

const home = () => window.location.href = "/";
const setCategoryState = () => {
  const list = document.getElementById("header-category");
  list?.classList.toggle("active");
}