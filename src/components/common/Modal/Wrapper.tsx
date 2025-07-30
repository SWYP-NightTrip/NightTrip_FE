import { Dialog } from '@/components/common/Dialog';

export default function PlanModalWrapper({
  children,
  ...rest
}: React.ComponentProps<typeof Dialog>) {
  return <Dialog {...rest}>{children}</Dialog>;
}
