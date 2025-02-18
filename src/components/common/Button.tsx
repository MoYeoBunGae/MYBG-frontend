import RightArrowIcon from '@/assets/icons/right-arrow.svg?react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'normal' | 'round' | 'withIcon' | 'onlyIcon';
  color?: 'primary' | 'white' | 'primaryOutlined' | 'darkOutlined' | 'lightOutlined' | 'disabled';
  icon?: React.ReactNode;
}

const Button = ({
  text,
  color = 'primary',
  variant = 'normal',
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const isDisabled = color === 'disabled';

  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`inline-flex items-center justify-center focus:outline-none min-w-max
        ${variant === 'normal' ? 'w-full h-10 rounded-md font-semibold' : 'text-xs font-medium'}
        ${variant === 'round' ? 'w-fit h-fit px-3 py-2 rounded-full' : ''}
        ${variant === 'withIcon' ? 'w-full h-fit px-4 py-2 rounded-md' : ''}
        ${variant === 'onlyIcon' ? 'size-12 rounded-full' : ''}
        ${color === 'primary' ? 'bg-primary text-white' : ''}
        ${color === 'white' ? 'bg-white text-black' : ' '}
        ${color === 'primaryOutlined' ? 'border-[1.25px] border-sub bg-primary text-white' : ' '}
        ${color === 'darkOutlined' ? 'border-[1.25px] border-darkgray text-black60' : ' '}
        ${color === 'lightOutlined' ? 'border-[1.25px] border-lightgray text-darkgray' : ' '}
        ${color === 'disabled' ? 'bg-lightgray text-darkgray' : ' '}
        ${className}
        `}
      {...props}
    >
      {icon && (
        <span
          className={`
            ${variant === 'withIcon' ? 'size-6 mr-2' : ''}
            ${variant === 'onlyIcon' ? 'w-8' : ''}`}
        >
          {icon}
        </span>
      )}
      <span className={`${variant === 'withIcon' ? 'flex-1 text-left' : ''}`}>{text}</span>
      {variant === 'withIcon' && (
        <span>
          <RightArrowIcon className={`size-3 ml-2 ${color === 'white' ? 'text-black60' : ' '}`} />
        </span>
      )}
    </button>
  );
};

export default Button;
