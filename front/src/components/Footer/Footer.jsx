import React from "react";
import s from "./Footer.module.css";
import GoogleMap from "./GoogleMap/GoogleMap";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

export default function Footer() {
  return (
    <div className={s.google}>
      <div className={s.contact}>
        <div className={s.tel}>
          <h3>Contact</h3>
          <h1>+49 999 999 99 99</h1>
          <SocialNetwork />
          <div></div>
        </div>
        <div className={s.adres}>
          <h3>Address</h3>
          <h2>Linkstraße 2, 8 OG, 10785,</h2>
          <h2>Berlin, Deutschland</h2>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
}
