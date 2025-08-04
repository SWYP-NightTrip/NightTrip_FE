export default function Loading() {
  return (
    <div className="flex items-center justify-center w-[100px] h-12 bg-white rounded-md shadow-lg">
      <div className="w-3 h-3 bg-nt-primary-4 rounded-full animate-pulse" />
      <div className="w-3 h-3 bg-nt-primary-4 rounded-full animate-pulse ml-4 [animation-delay:0.2s]" />
      <div className="w-3 h-3 bg-nt-primary-4 rounded-full animate-pulse ml-4 [animation-delay:0.4s]" />
    </div>
  );
}
