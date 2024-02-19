import React, { useState } from "react";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-content">{frontContent}</div>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-content">{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
