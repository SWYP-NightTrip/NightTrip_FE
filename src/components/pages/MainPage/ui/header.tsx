import TopNav from '@/components/common/TopNav';

import LogoIcon from '@/icons/logo.svg';
import AddTravelIcon from '@/icons/add-travel.svg';

export default function Header() {
  return (
    <TopNav>
      <div className="w-full h-full header1 flex items-center justify-start pl-4">
        <LogoIcon />
      </div>
      <div className="w-full h-full flex items-center justify-end pr-2">
        <button className="bg-nt-white active:bg-nt-primary-50 p-2 rounded-nt-radius">
          <AddTravelIcon />
        </button>
      </div>
    </TopNav>
  );
}
