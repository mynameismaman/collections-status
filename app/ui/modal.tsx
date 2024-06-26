"use client";
export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors visible bg-black/20 `}
    >
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all scale-100 opacity-100 h-[30rem] sm:h-[32rem] w-[20rem] sm:w-1/2`}>
        <button className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50" onClick={onClose}>x</button>
        <div className="flex flex-row justify-end items-end h-full w-full relative">
          {children}
        </div>
        <button className="absolute bottom-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50">Download</button>
      </div>
    </div>
  );
}
