import React, { useState } from 'react';


const SwitchButton: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
