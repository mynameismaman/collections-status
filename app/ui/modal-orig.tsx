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
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 " : "invisible"
      }`}
    >
      <div className="relative p-4 w-full max-w-2x1 max-h-full">
        <div className="p-4 relative h-[32rem] bg-white rounded-lg shadow">
          {children}
        </div>
        <div className="p-4 mt-2 relative bg-white rounded-lg shadow">
          <button>Okey</button>
        </div>
      </div>
    </div>
  );
}
