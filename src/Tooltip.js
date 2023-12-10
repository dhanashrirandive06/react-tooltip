import { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const showTooltipHandler = () => {
    setShowTooltip(true);
  };

  const hideTooltipHandler = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={showTooltipHandler}
        onMouseLeave={hideTooltipHandler}
      >
        {children}
      </div>
      {showTooltip && (
        <div className={`tooltip_${position}`}>
          Thanks for hovering! I'm Tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;
