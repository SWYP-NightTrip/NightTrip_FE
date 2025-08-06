import { useRouter } from 'next/navigation';

import Image from 'next/image';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';

import { useModalStore } from '@/store/modal';

function LoginErrorModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const goLoginPage = () => {
    closeModal();
    router.push('/login');
  };

  return (
    <Modal.Content title="로그인 및 회원가입" className="w-[375px] z-[9999]">
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-2.5 mt-4.5">
        <div className="flex flex-col items-center justify-center">
          <p className="header3 text-nt-gray-900">로그인 혹은 회원가입이</p>
          <p className="header3 text-nt-gray-900">필요합니다.</p>
          <div className="mt-0.5">
            <p className="body2 text-nt-gray-900">좋아요는 나잇트립 회원만 가능해요</p>
          </div>
        </div>
        <div className="mt-2.5">
          <Image src="/images/rabbit.png" alt="나이트 트립 대표 이미지" width={70} height={76} />
        </div>
      </div>

      <div className="mt-4.5">
        <Button className="w-full" onClick={goLoginPage}>
          로그인/회원가입으로 이동!
        </Button>
      </div>
    </Modal.Content>
  );
}

function UnExpectedErrorModal() {
  const { closeModal } = useModal();

  const router = useRouter();

  const goHomePage = () => {
    closeModal();
    router.push('/');
  };

  return (
    <Modal.Content title="로그인 및 회원가입" className="w-[375px] z-[9999]">
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-2.5 mt-4.5">
        <div className="flex flex-col items-center justify-center">
          <p className="header3 text-nt-gray-900">예상치 못한 오류가 발생했어요</p>
          <div className="mt-0.5">
            <p className="body2 text-nt-gray-900">잠시 후 다시 시도해주세요</p>
          </div>
        </div>
        <div className="mt-2.5">
          <Image src="/images/rabbit.png" alt="나이트 트립 대표 이미지" width={70} height={76} />
        </div>
      </div>

      <div className="mt-4.5">
        <Button className="w-full" onClick={goHomePage}>
          홈 화면으로 이동!
        </Button>
      </div>
    </Modal.Content>
  );
}

function ServerErrorModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const goHomePage = () => {
    closeModal();
    router.push('/');
  };

  return (
    <Modal.Content title="로그인 및 회원가입" className="w-[375px] z-[9999]">
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-2.5 mt-4.5">
        <div className="flex flex-col items-center justify-center">
          <p className="header3 text-nt-gray-900">서버 오류가 발생했어요</p>
          <div className="mt-0.5">
            <p className="body2 text-nt-gray-900">잠시 후 다시 시도해주세요</p>
          </div>
        </div>
        <div className="mt-2.5">
          <Image src="/images/rabbit.png" alt="나이트 트립 대표 이미지" width={70} height={76} />
        </div>
      </div>

      <div className="mt-4.5">
        <Button className="w-full" onClick={goHomePage}>
          홈 화면으로 이동!
        </Button>
      </div>
    </Modal.Content>
  );
}

export const useModal = () => {
  const { isOpen, openModal, closeModal, content } = useModalStore();

  const modal = {
    loginError: (open: boolean) => {
      if (open) {
        openModal(<LoginErrorModal />);
      } else {
        closeModal();
      }
    },
    unExpectedError: (open: boolean) => {
      if (open) {
        openModal(<UnExpectedErrorModal />);
      } else {
        closeModal();
      }
    },
    serverError: (open: boolean) => {
      if (open) {
        openModal(<ServerErrorModal />);
      } else {
        closeModal();
      }
    },
  };

  return {
    content,
    isOpen,
    modal,
    closeModal,
  };
};
