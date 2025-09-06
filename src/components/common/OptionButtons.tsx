import { RadioGroup, RadioGroupItem } from '@/lib/shadcn/components/ui/radio-group';
import { Label } from '@/lib/shadcn/components/ui/label';
import { cn } from '@/lib/shadcn/utils';

interface Option {
  value: string;
  label: string;
}

interface OptionButtonsProps {
  options: Option[];
  value?: string | null;
  onChange?: (value: string) => void;
  className?: string;
}

export default function OptionButtons({ options, value, onChange, className }: OptionButtonsProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className={cn('flex flex-wrap gap-5', className)}
    >
      {options.map(option => (
        <div key={option.value} className="flex items-center">
          <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
          <Label
            htmlFor={option.value}
            className={cn(
              'px-3.5 py-2.5 h-[42px] rounded-[10px] header5 cursor-pointer transition-colors hover:bg-nt-neutral-100 hover:text-nt-neutral-400 text-nt-neutral-400',
              value === option.value
                ? 'bg-[#c8c7f0] border-1 border-nt-primary-400 text-nt-neutral-white'
                : 'bg-nt-neutral-250',
            )}
          >
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
