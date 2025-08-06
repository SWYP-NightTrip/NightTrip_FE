'use client';

import { useModal } from '@/hooks/useModal';

import Modal from '@/components/common/Modal';
import QueryProvider from '@/lib/tanstack/QueryProvider';

function ModalProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, modal, content } = useModal();

  return (
    <Modal.Wrapper open={isOpen} onOpenChange={modal.loginError}>
      {children}
      {content}
    </Modal.Wrapper>
  );
}

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <QueryProvider>{children}</QueryProvider>
    </ModalProvider>
  );
}
