import React from "react";
import bush from "../../images/big_bush.png";
import s from "./NewSeason.module.css";
import { Link } from "react-router-dom";

export default function NewSeson() {
  return (
    <div className={s.new_season}>
      <div className={s.headers}>
        <h1>Sale</h1>
        <h2>New season</h2>
        <Link to='/sale'>
          <div className={s.sale_btn}>Sale</div>
        </Link>
      </div>
      <img src={bush} alt="big bush" />
    </div>
  );
}
