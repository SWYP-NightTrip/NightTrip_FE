import { Dialog } from '@/components/common/Dialog';

export default function ModalWrapper({
  children,
  ...rest
}: React.ComponentProps<typeof Dialog>) {
  return <Dialog {...rest}>{children}</Dialog>;
}
