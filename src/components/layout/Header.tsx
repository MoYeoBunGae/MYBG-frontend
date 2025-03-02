import { useNavigate } from 'react-router-dom';
import BellIcon from '@/assets/icons/bell.svg?react';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';

interface HeaderProps {
  pagename: string;
  variant?: 'main' | 'sub';
  hasBell?: boolean;
  leftIcon?: 'none' | 'back' | 'close';
  rightIcon?: 'none' | 'menu';
  isCenter?: boolean;
  isWhiteText?: boolean;
}

const Header = ({
  pagename,
  variant = 'main',
  hasBell = true,
  leftIcon = 'none',
  rightIcon = 'none',
  isCenter = false,
  isWhiteText = false,
}: HeaderProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-between h-12 px-4 py-3 relative">
      {leftIcon !== 'none' && (
        <div className="mr-3" onClick={goBack}>
          {leftIcon === 'back' && (
            <LeftArrowIcon
              className={`size-6 cursor-pointer ${isWhiteText ? 'text-white' : ' text-black20'}`}
            />
          )}
          {leftIcon === 'close' && (
            <CloseIcon
              className={`size-6 cursor-pointer ${isWhiteText ? 'text-white' : ' text-black20'}`}
            />
          )}
        </div>
      )}

      <div
        className={`font-bold truncate
        ${variant === 'main' ? 'text-xl' : 'text-lg '}
        ${isCenter ? 'absolute left-1/2 -translate-x-1/2 w-max' : 'flex-1'}
        ${isWhiteText ? 'text-white' : ''}
        }`}
      >
        {pagename}
      </div>

      <div className="flex ml-3 gap-2">
        {hasBell && (
          <BellIcon
            className={`size-6 cursor-pointer ${isWhiteText ? 'text-white' : ' text-black20'}`}
          />
        )}
        {rightIcon !== 'none' && (
          <>
            {rightIcon === 'menu' && (
              <MenuIcon
                className={`size-6 cursor-pointer ${isWhiteText ? 'text-white' : ' text-black20'}`}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
