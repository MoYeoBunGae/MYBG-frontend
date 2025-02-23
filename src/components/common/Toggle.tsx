import { useState } from 'react';

interface ToggleProps {
  checked?: boolean;
  size?: '20' | '24';
  onChange?: (checked: boolean) => void;
}

const Toggle = ({ checked = false, size = '24', onChange }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  const sizes = {
    20: {
      toggle: 'w-10 h-5',
      circle: 'size-4',
      translate: 'translate-x-5',
    },
    24: {
      toggle: 'w-12 h-6',
      circle: 'size-5',
      translate: 'translate-x-6',
    },
  };

  return (
    <button
      className={`p-0.5 rounded-full ${sizes[size].toggle} ${isChecked ? 'bg-sub' : 'bg-darkgray'}`}
      onClick={handleToggle}
    >
      <div
        className={`rounded-full bg-white transition-transform duration-200 ${sizes[size].circle} ${isChecked ? sizes[size].translate : 'translate-x-0'}`}
      />
    </button>
  );
};

export default Toggle;
