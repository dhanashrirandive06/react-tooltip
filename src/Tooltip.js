//imports
import { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ position, children }) => {
  //React useState to show and hide tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  //Set showTooltip true if we hover on button
  const showTooltipHandler = () => {
    setShowTooltip(true);
  };

  //Set showTooltip false if we hover on button
  const hideTooltipHandler = () => {
    setShowTooltip(false);
  };

  return (
    //tooltip container
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        //check mouseOver and mouseOut
        onMouseOver={showTooltipHandler}
        onMouseOut={hideTooltipHandler}
      >
        {children}
      </div>
      {/* show Tooltip element if showTooltip state is true */}
      {showTooltip && (
        <div className={`tooltip_${position}`}>
          Thanks for hovering! I'm Tooltip
        </div>
      )}
    </div>
  );
};

//exports
export default Tooltip;
