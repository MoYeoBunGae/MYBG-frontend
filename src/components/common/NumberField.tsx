import { useEffect, useRef, useState } from 'react';

interface NumberFieldProps {
  value: number;
  label: string;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

const NumberField = ({ value, label, min, max, step = 1, onChange }: NumberFieldProps) => {
  const [inputValue, setInputValue] = useState(value.toString());
  const lastPropValue = useRef(value);

  useEffect(() => {
    if (lastPropValue.current === value) return;
    setInputValue(value.toString());
    lastPropValue.current = value;
  }, [value]);

  const handleDecrease = () => {
    const newValue = value - step;
    setInputValue(newValue.toString());
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = value + step;
    setInputValue(newValue.toString());
    onChange(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(rawValue);
  };

  const handleBlur = () => {
    const numericValue = Number(inputValue);
    if (inputValue === '' || isNaN(numericValue)) {
      setInputValue(value.toString());
      return;
    }

    const newValue = Math.min(Math.max(numericValue, min), max);
    setInputValue(newValue.toString());
    onChange(newValue);
  };

  return (
    <div className="flex items-center p-2 text-sm">
      {label && <label className="flex-1 font-semibold text-black">{label}</label>}
      <div className="flex items-center gap-2">
        <button
          className={`size-6 rounded-md font-bold text-white
            ${value <= min ? 'bg-darkgray' : 'bg-sub'}`}
          onClick={handleDecrease}
          disabled={value <= min}
        >
          -
        </button>

        <div className="flex w-20 h-10 px-3 py-2.5 rounded-sm border border-lightgray">
          <input
            type="tel"
            className={`w-full text-center focus:outline-none
              ${value === Number(lastPropValue.current) ? 'text-black84' : 'text-black20'}`}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <span className="text-black84"> 명</span>
        </div>

        <button
          className={`size-6 rounded-md font-bold text-white
            ${value >= max ? 'bg-darkgray' : 'bg-sub'}`}
          onClick={handleIncrease}
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberField;
