import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

const Dropdown = ({ isVisible, items }) => {
  const [visible, setVisible] = useState(false);
  const [finalVisible, setFinalVisible] = useState(isVisible);

  useEffect(() => {
    setFinalVisible(isVisible || visible);
  }, [isVisible, visible]);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <>
      {finalVisible && (
        <div className="dropdown-container">
          <div
            className="dropdown-items"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {items.map((item, index) => (
              <div key={index} className="item-container">
                <NavLink to={item.path} className="link-container">
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
