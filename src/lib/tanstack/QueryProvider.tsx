'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack/queryClient';
import { useModal } from '@/hooks/useModal';

import {
  HTTP401Error,
  HTTP500Error,
  HTTPEtcError,
  UnExpectedAPIError,
} from '@/utils/request/error';

export const useMutationErrorHandler = () => {
  const { modal } = useModal();

  return (error: Error) => {
    if (error instanceof HTTP401Error) {
      modal.loginError(true);
      return;
    }

    if (error instanceof HTTP500Error) {
      modal.serverError(true);
      return;
    }

    if (error instanceof HTTPEtcError || error instanceof UnExpectedAPIError) {
      modal.unExpectedError(true);
      return;
    }
  };
};

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const handleMutationError = useMutationErrorHandler();

  const queryClient = getQueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      mutations: {
        onError: handleMutationError,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
