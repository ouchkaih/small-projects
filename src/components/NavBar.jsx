import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Multilangue() {
  const navbar = useSelector((state) => state.navItems);

  const Changelangue = (e) => {
    // if (e.target.value == "francais") {
    //   setNavbar({ home: "Acuel", about: "a propos", product: "produits" });
    // } else if (e.target.value == "espagnol") {
    //   setNavbar({ home: "Hogar", about: "Sobre", product: "Productos" });
    // } else if (e.target.value == "dutch") {
    //   setNavbar({ home: "Huis", about: "Over", product: "Producten" });
    // } else if (e.target.value == "italian") {
    //   setNavbar({ home: "Casa", about: "Di", product: "Prodotti" });
    // } else if (e.target.value == "anglais") {
    //   setNavbar({ home: "Home", about: "About", product: "products" });
    // }
  };
  return (
    <div>
      <select onChange={Changelangue}>
        <option>francais</option>
        <option>espagnol</option>
        <option>dutch</option>
        <option>italian</option>
        <option>anglais</option>
      </select>
      <table className=" table table-bordered bg-primary text-light">
        <th>{navbar.item1}</th>
        <th>{navbar.item2}</th>
        <th>{navbar.item3}</th>
      </table>
    </div>
  );
}
