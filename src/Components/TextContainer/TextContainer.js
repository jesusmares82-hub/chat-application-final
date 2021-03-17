import React from "react";

import { FcOnlineSupport } from "react-icons/fc";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  
  <div className="textContainer">
    {users ? (
      <>
        <div className="activeContainer">
          <h5 style={{ marginLeft: 8 }}>
            {users.map(({ name, i }) => (
              <div key={name.d+i} className="activeItem">
                {name}
                <FcOnlineSupport />
              </div>
            ))}
          </h5>
        </div>
      </>
    ) : "No hay usuarios para mostar"}
  </div>
);

export default TextContainer;