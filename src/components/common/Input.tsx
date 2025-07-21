import { Input as ShadcnInput } from '@/lib/shadcn/components/ui/input';
import { cn } from '@/lib/shadcn/utils';

interface InputProps extends React.ComponentProps<typeof ShadcnInput> {
  state?: 'default' | 'success' | 'error';
}

export default function Input({ state = 'default', className, type, ...props }: InputProps) {
  const baseStyles = cn(
    'border border-nt-neutral-250 rounded-nt-radius shadow-none px-[16px] py-[13px] h-[46px]',
    'focus-visible:border-nt-primary focus-visible:ring-transparent focus-visible:ring-0',
    'disabled:border-nt-neutral-400 disabled:bg-nt-neutral-200 disabled:placeholder-nt-neutral-400 disabled:opacity-100',
    'placeholder:text-nt-neutral-250',
  );

  const getStateStyles = (state: InputProps['state']) => {
    switch (state) {
      case 'success':
        return 'border-nt-success';
      case 'error':
        return 'border-nt-error';
      case 'default':
      default:
        return '';
    }
  };

  return (
    <ShadcnInput
      type={type}
      className={cn(baseStyles, getStateStyles(state), className)}
      {...props}
    />
  );
}
