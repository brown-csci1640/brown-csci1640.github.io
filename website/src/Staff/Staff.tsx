import React from "react";
import StaffCard from "./StaffCard";
import "./Staff.css";

import nikos from "./photos/actual/nikos.jpg";
import nikos2 from "./photos/item/nikos2.jpg";
import yen from "./photos/actual/yen.jpeg";
import kevin from "./photos/actual/kevin_temp.jpeg";
import alex from "./photos/actual/alex.jpg";
import alex2 from "./photos/item/nikos2.jpg";
import keyan from "./photos/actual/keyan.jpg";
import keyan2 from "./photos/item/nikos2.jpg";

export default function Staff() {
  return (
    <div className="staff">
      <h3>Staff</h3>
      <h4>Professor</h4>
      <div className="center">
        <StaffCard
          name="Nikos Triandopoulos"
          pronouns="he/him/his"
          email="	nikolaos_triandopoulos@brown.edu"
          image={nikos}
          item={nikos2}
          hours="Hours: M,T 1-2 or by appt -- CIT 223"
        />
      </div>

      <h4>Grad TA</h4>
      <div className="center">
        <StaffCard
          name="Yen Chu"
          pronouns="he/him/his"
          email="yen_chu@brown.edu"
          image={yen}
          item={alex2}
          hours="Hours: TBD"
        />
      </div>

      <h4>Grad TA</h4>

      <div className="center">
        <StaffCard
          name="Kevin Zhu"
          pronouns="he/him/his"
          email="kevin_t_zhu@brown.edu"
          image={kevin}
          item={keyan2}
          hours="Hours: TBD"
        />
      </div>
    </div>
  );
}
