import { ModalContent, ModalHeader, ModalTitle } from '@/components/common/Modal';
import Header from '@/components/common/PlanModal/Header';

interface PlanModalContentProps {
  title: string;
  children?: React.ReactNode;
}

export default function PlanModalContent({ title, children }: PlanModalContentProps) {
  return (
    <ModalContent>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>

      <Header title={title} />

      {children}
    </ModalContent>
  );
}
