import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@/assets/icons/close.svg?react';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheetModal = ({ isOpen, onClose, children }: BottomSheetModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/35 z-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed left-0 bottom-0 w-full z-2 px-6 pt-5 pb-10 rounded-t-[24px] bg-white max-h-[65vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-5 right-6">
              <CloseIcon className="size-6 text-black84 cursor-pointer" onClick={onClose} />
            </div>
            <div className="pt-11">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheetModal;
