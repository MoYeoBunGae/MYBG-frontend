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
}

const Header = ({
  pagename,
  variant = 'main',
  hasBell = true,
  leftIcon = 'none',
  rightIcon = 'none',
  isCenter = false,
}: HeaderProps) => {
  return (
    <div className="flex items-center justify-between h-12 px-4 py-3 relative">
      {leftIcon !== 'none' && (
        <div className="mr-3">
          {leftIcon === 'back' && <LeftArrowIcon className="size-6 text-black20 cursor-pointer" />}
          {leftIcon === 'close' && <CloseIcon className="size-6 text-black20 cursor-pointer" />}
        </div>
      )}

      <div
        className={`font-bold truncate
        ${variant === 'main' ? 'text-xl' : 'text-lg '}
        ${isCenter ? 'absolute left-1/2 -translate-x-1/2 w-max' : 'flex-1'}
        }`}
      >
        {pagename}
      </div>

      <div className="flex ml-3 gap-2">
        {hasBell && <BellIcon className="size-6 text-black20 cursor-pointer" />}
        {rightIcon !== 'none' && (
          <>{rightIcon === 'menu' && <MenuIcon className="size-6 text-black20 cursor-pointer" />}</>
        )}
      </div>
    </div>
  );
};

export default Header;
