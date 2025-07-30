import { DialogTrigger } from '@/components/common/Dialog';

export default function PlanModalWrapper({
  children,
  ...rest
}: React.ComponentProps<typeof DialogTrigger>) {
  return <DialogTrigger {...rest}>{children}</DialogTrigger>;
}
