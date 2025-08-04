import { DialogClose, DialogTitle } from '@/components/common/Dialog';
import Button from '@/components/common/Button';
// import Exit from '@/icons/exit.svg'; // 빌드용
import { X } from 'lucide-react'; // 스토리북용

export default function ModalNav({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center h-[52px] pb-3 border-b-1">
      <div className="w-[40px]" />
      <DialogTitle className="header3">{title}</DialogTitle>
      <DialogClose asChild>
        <Button className="w-[40px] h-[40px] bg-transparent shadow-none">
          <X className="text-nt-neutral-black" />
          {/* <Exit /> */}
        </Button>
      </DialogClose>
    </div>
  );
}
