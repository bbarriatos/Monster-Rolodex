import React from "react";

import "./card-style.css";

const Card = ({ monster: { name, email, id } }) => {
  return (
    <div key={id} className="card-container">
      <h1>test update</h1>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
