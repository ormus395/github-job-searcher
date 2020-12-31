import sun from "../../assets/desktop/icon-sun.svg";
import moon from "../../assets/desktop/icon-moon.svg";

import "./toggle.css";
import { useState } from "react";

const Toggle = () => {
  let [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="toggle-container" onClick={handleClick}>
      <span className="sun"></span>
      <div
        className={`toggle 
         ${toggle ? "end" : ""}
      `}
      >
        <div className="toggle__btn"></div>
      </div>
      <span className="moon"></span>
    </div>
  );
};

export default Toggle;
