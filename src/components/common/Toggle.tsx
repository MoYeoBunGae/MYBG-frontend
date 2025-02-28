import { useState } from 'react';
import { motion } from 'framer-motion';

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
      translate: 20, // px 단위로 조정
    },
    24: {
      toggle: 'w-12 h-6',
      circle: 'size-5',
      translate: 24,
    },
  };

  return (
    <button
      className={`p-0.5 rounded-full ${sizes[size].toggle} ${isChecked ? 'bg-sub' : 'bg-darkgray'}`}
      onClick={handleToggle}
    >
      <motion.div
        className={`rounded-full bg-white ${sizes[size].circle}`}
        layout
        initial={false}
        animate={{ x: isChecked ? sizes[size].translate : 0 }}
        transition={{ type: 'spring', visualDuration: 0.2, bounce: 0.2 }}
      />
    </button>
  );
};

export default Toggle;
