import { cn } from '@/lib/shadcn/utils';
import {
  Dialog,
  DialogClose,
  DialogContent as ShadcnDialogContent,
  DialogTitle as ShadcnDialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/lib/shadcn/components/ui/dialog';

function DialogContent({
  className,
  children,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof ShadcnDialogContent> & {
  showCloseButton?: boolean;
}) {
  return (
    <ShadcnDialogContent
      className={cn(
        'flex flex-col px-4 py-3 gap-0 !max-w-[375px] min-h-[400px] bottom-0 top-auto translate-y-0 rounded-t-[40px] rounded-b-none data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        className,
      )}
      showCloseButton={showCloseButton}
      aria-labelledby="dialog-title"
      aria-describedby=""
      {...props}
    >
      {children}
    </ShadcnDialogContent>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof ShadcnDialogTitle>) {
  return <ShadcnDialogTitle className={cn('sr-only', className)} {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
