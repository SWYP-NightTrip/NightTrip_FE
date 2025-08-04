/**
 * 디바운스 유틸 함수
 * 연속된 함수 호출을 제한하고 마지막 호출만 실행합니다.
 *
 * @param func - 실행할 함수
 * @param delay - 지연 시간 (밀리초)
 * @returns 디바운스된 함수
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    // 이전 타이머가 있다면 취소
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // 새로운 타이머 설정
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
