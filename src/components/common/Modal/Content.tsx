import { DialogContent, DialogHeader, DialogTitle } from '@/components/common/Dialog';
import Header from '@/components/common/Modal/Header';

interface PlanDialogContentProps extends React.ComponentProps<typeof DialogContent> {
  title: string;
}

export default function PlanDialogContent({ title, children, ...rest }: PlanDialogContentProps) {
  return (
    <DialogContent {...rest}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>

      <Header title={title} />

      {children}
    </DialogContent>
  );
}
