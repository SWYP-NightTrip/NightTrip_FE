import {
  Tabs as ShadcnTabs,
  TabsContent as ShadcnTabsContent,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
} from '@/lib/shadcn/components/ui/tabs';
import { cn } from '@/lib/shadcn/utils';

interface TabsProps extends React.ComponentProps<typeof ShadcnTabs> {
  defaultTab: string;
}

function Tabs({ defaultTab, className, ...props }: TabsProps) {
  return <ShadcnTabs defaultValue={defaultTab} className={className} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof ShadcnTabsList>) {
  return (
    <ShadcnTabsList
      className={cn('w-full h-[48px] bg-transparent gap-0 rounded-none p-0', className)}
      {...props}
    />
  );
}

const baseTriggerStyles = cn(
  'flex-1 h-full data-[state=active]:shadow-none border-b-nt-neutral-200 text-base font-normal',
  'text-nt-neutral-black data-[state=active]:font-semibold',
  'data-[state=active]:border-b-2 data-[state=active]:border-b-nt-primary',
  'rounded-none cursor-pointer focus-visible:ring-[0px] focus-visible:border-b-nt-primary-600 focus-visible:outline-1',
);

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof ShadcnTabsTrigger>) {
  return <ShadcnTabsTrigger className={cn(baseTriggerStyles,className)} {...props} />;
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof ShadcnTabsContent>) {
  return <ShadcnTabsContent className={className} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
