import { ModalContent, ModalHeader, ModalTitle } from '@/components/common/Modal';
import Header from '@/components/common/PlanModal/Header';

interface PlanModalContentProps extends React.ComponentProps<typeof ModalContent> {
  title: string;
}

export default function PlanModalContent({ title, children, ...rest }: PlanModalContentProps) {
  return (
    <ModalContent {...rest}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>

      <Header title={title} />

      {children}
    </ModalContent>
  );
}
