import React from "react";
import "./header.css";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <header>
      <nav>
        <span className="logo">Brand Name</span>
        <span className="menu" ><GiHamburgerMenu/></span>
      </nav>

    <h1>Product, product, product </h1>
    <h3>service, service, service</h3>
    <div className="btn">
      <button>GET</button>
    </div>


    </header>
  );
}
