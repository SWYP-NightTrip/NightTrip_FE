import { DialogContent } from '@/components/common/Dialog';
import Nav from '@/components/common/Modal/Nav';

interface ModalContentProps extends React.ComponentProps<typeof DialogContent> {
  title: string;
}

export default function ModalContent({ title, children, ...rest }: ModalContentProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-[9998]" />
      <DialogContent {...rest}>
        <Nav title={title} />
        {children}
      </DialogContent>
    </>
  );
}
