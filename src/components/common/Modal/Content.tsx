import { DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import Nav from '@/components/common/Modal/Nav';

interface ModalContentProps extends React.ComponentProps<typeof DialogContent> {
  title: string;
}

export default function ModalContent({ title, children, ...rest }: ModalContentProps) {
  return (
    <DialogContent {...rest}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <Nav title={title} />

      {children}
    </DialogContent>
  );
}
