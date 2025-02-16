import { useEffect, useRef } from 'react';

interface TextFieldProps {
  value: string;
  placeholder: string;
  maxLength: number;
  label?: string;
  isMultiline?: boolean;
  onChange: (value: string) => void;
}

const TextField = ({
  value,
  placeholder,
  label,
  maxLength,
  isMultiline = false,
  onChange,
}: TextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= maxLength) {
      onChange(inputValue);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isMultiline && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, isMultiline]);

  return (
    <div className="grid px-2 gap-2 text-sm">
      {label && (
        <div className="flex">
          <label className="flex-1 font-semibold text-black">{label}</label>
          <span className="text-black84">
            {value.length}/{maxLength}
          </span>
        </div>
      )}
      <div>
        {isMultiline ? (
          <textarea
            ref={textareaRef}
            className="w-full min-h-10 px-3 py-2.5 rounded-sm border border-lightgray text-black20 focus:outline-none placeholder-black84 resize-none overflow-hidden"
            value={value}
            onChange={handleInputChange}
            maxLength={maxLength}
            placeholder={placeholder}
            spellCheck={false}
            rows={1}
          />
        ) : (
          <input
            type="text"
            className="w-full h-10 px-3 py-2.5 rounded-sm border border-lightgray text-black20 focus:outline-none placeholder-black84"
            value={value}
            onChange={handleInputChange}
            maxLength={maxLength}
            placeholder={placeholder}
            spellCheck={false}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
