import { cn } from '@/lib/shadcn/utils';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/lib/shadcn/components/ui/dialog';

function ModalContent({
  className,
  children,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof DialogContent> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogContent
      className={cn(
        'flex flex-col px-4 py-3 gap-0 !max-w-[375px] bottom-0 translate-y-0 rounded-t-[40px] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        className,
      )}
      showCloseButton={showCloseButton}
      aria-labelledby="dialog-title"
      aria-describedby=""
      {...props}
    >
      {children}
    </DialogContent>
  );
}

function ModalTitle({ className, ...props }: React.ComponentProps<typeof DialogTitle>) {
  return <DialogTitle className={cn('sr-only', className)} {...props} />;
}

export {
  Dialog as Modal,
  DialogClose as ModalClose,
  ModalContent,
  DialogHeader as ModalHeader,
  ModalTitle,
  DialogTrigger as ModalTrigger,
};
