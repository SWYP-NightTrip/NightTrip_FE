import { create } from 'zustand';
import type { DialogContent } from '@/lib/shadcn/components/ui/dialog';

type ModalContentType = React.ReactElement<React.ComponentProps<typeof DialogContent>>;

interface ModalStore {
  isOpen: boolean;
  content: ModalContentType | null;
  openModal: (content: ModalContentType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>(set => ({
  isOpen: false,
  content: null,
  openModal: (content: ModalContentType) => {
    set({ isOpen: true, content });
  },
  closeModal: () => {
    set({ isOpen: false, content: null });
  },
}));
