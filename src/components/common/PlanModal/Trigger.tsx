import { ModalTrigger } from '@/components/common/Modal';

export default function PlanModalWrapper({children, ...rest}: React.ComponentProps<typeof ModalTrigger>) {
  return <ModalTrigger {...rest}>{children}</ModalTrigger>;
}
