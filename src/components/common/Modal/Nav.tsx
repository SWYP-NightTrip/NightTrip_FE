import { DialogClose } from '@/components/common/Dialog';
import Button from '@/components/common/Button';
import Exit from '@/icons/exit.svg';

export default function ModalNav({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center h-[52px] pb-3 border-b-1">
      <div className="w-[40px]" />
      <p className=" header3">{title}</p>
      <DialogClose asChild>
        <div>
          <Button className="w-[40px] h-[40px] bg-transparent shadow-none">
            <Exit />
          </Button>
        </div>
      </DialogClose>
    </div>
  );
}
