import { DialogContent } from '@/components/common/Dialog';
import Nav from '@/components/common/Modal/Nav';

interface ModalContentProps extends React.ComponentProps<typeof DialogContent> {
  title: string;
}

export default function ModalContent({ title, children, ...rest }: ModalContentProps) {
  return (
    <DialogContent {...rest}>
      <Nav title={title} />
      {children}
    </DialogContent>
  );
}
