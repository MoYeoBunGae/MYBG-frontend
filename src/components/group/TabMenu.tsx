import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabMenu = ({ tabs, activeTab, setActiveTab }: TabMenuProps) => {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabRefs = useRef<Map<number, HTMLButtonElement | null>>(new Map());

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current.get(activeIndex);

    if (activeTabElement) {
      setUnderlineWidth(activeTabElement.offsetWidth);
      setUnderlineLeft(activeTabElement.offsetLeft);
    }
  }, [activeTab, tabs]);

  return (
    <div className="relative flex justify-around bg-white text-center shadow-first">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          ref={(el) => {
            if (el) tabRefs.current.set(index, el);
          }}
          onClick={() => setActiveTab(tab)}
          className={`relative py-3 font-semibold text-sm ${
            activeTab === tab ? 'text-black' : 'text-darkgray'
          }`}
        >
          <div className="mx-2">{tab}</div>
        </button>
      ))}

      <motion.div
        className="absolute bottom-0 h-[2px] bg-secondary"
        initial={false}
        animate={{
          left: underlineLeft,
          width: underlineWidth,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default TabMenu;
