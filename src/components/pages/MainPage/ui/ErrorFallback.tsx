export default function ErrorFallback({ dataType }: { dataType: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* 메시지 */}
        <div className="flex flex-col gap-2">
          <p className="body1 text-nt-gray-900">{dataType} 데이터를 요청할 수 없습니다</p>
        </div>
      </div>
    </div>
  );
}
