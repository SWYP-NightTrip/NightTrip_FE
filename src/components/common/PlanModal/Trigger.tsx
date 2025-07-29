import { ModalTrigger } from '@/components/common/Modal';

interface PlanModalTriggerProps {
  children: React.ReactNode;
}

export default function PlanModalWrapper({ children }: PlanModalTriggerProps) {
  return <ModalTrigger>{children}</ModalTrigger>;
}
