import BellIcon from '@/assets/icons/bell.svg?react';

interface HeaderProps {
  pagename: string;
  hasBell?: boolean;
}
const Header = ({ pagename, hasBell = true }: HeaderProps) => {
  return (
    <div className="flex items-center px-4 py-3">
      <div className="flex-1 text-xl font-bold">{pagename}</div>
      {hasBell && <BellIcon className="w-6 h-6 text-black20" />}
    </div>
  );
};

export default Header;
