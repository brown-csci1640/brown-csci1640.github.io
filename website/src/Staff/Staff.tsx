import React from "react";
import StaffCard from "./StaffCard";
import "./Staff.css";

import nikos from "./photos/actual/nikos.jpg";
import nikos2 from "./photos/item/alex.jpg";
import alex from "./photos/actual/alex.jpg";
import alex2 from "./photos/item/alex.jpg";
import keyan from "./photos/actual/keyan.jpg";
import keyan2 from "./photos/item/keyan2.jpg";

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

      <h4>HTA</h4>
      <div className="center">
        <StaffCard
          name="Yen Chu"
          pronouns="he/him/his"
          email="yen_chu@brown.edu"
          image={alex}
          item={alex2}
          hours="Hours: TBD"
        />
      </div>

      <h4>UTA</h4>

      <div className="center">
        <StaffCard  
          name="Kevin Zhu"
          pronouns="he/him/his"
          email="kevin_t_zhu@brown.edu"
          image={keyan}
          item={keyan2}
          hours="Hours: TBD"
        />
      </div>
    </div>
  );
}
