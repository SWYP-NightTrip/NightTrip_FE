import { Modal } from '@/components/common/Modal';

interface PlanModalWrapperProps {
  children: React.ReactNode;
}

export default function PlanModalWrapper({ children }: PlanModalWrapperProps) {
  return <Modal>{children}</Modal>;
}
