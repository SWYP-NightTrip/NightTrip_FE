import { Modal } from '@/components/common/Modal';

export default function PlanModalWrapper({ children, ...rest }: React.ComponentProps<typeof Modal>) {
  return <Modal {...rest}>{children}</Modal>;
}



