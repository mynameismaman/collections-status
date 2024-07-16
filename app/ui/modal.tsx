"use client";
export default function Modal({
  open,
  onClose,
  download,
  children,
  onNext,
  onPrevious,
}: {
  open: boolean;
  onClose: () => void;
  download:() => void;
  children: React.ReactNode;
  onNext:() => void;
  onPrevious:() => void;
}) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex flex-col justify-center items-center transition-colors ${open ? "visible bg-black/80" : "invisible"} `}
    >
      <div onClick={(e) => e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all ${ open ? "scale-100 opacity-100":"scale-125 opacity-0"} h-[30rem] sm:h-[32rem] w-[20rem] sm:w-1/2`}>
        <button className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50" onClick={onClose}>x</button>
        <div className="flex flex-row justify-end items-end h-full w-full relative">
          {children}
        </div>
      </div>
      <div onClick={(e) => e.stopPropagation()} className={`mt p-2 transition-all ${ open ? "scale-100 opacity-100":"scale-125 opacity-0"} w-[20rem] sm:w-1/2`}>
        <div className="flex flex-row justify-between">
        <button className="bg-slate-500 hover:bg-slate-400 text-white text-sm font-bold py-2 px-3 rounded inline-flex items-center" onClick={onPrevious}>Previous</button>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-800 text-sm font-bold py-2 px-3 rounded inline-flex items-center" onClick={download}>          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
 </button>
        <button className="bg-slate-500 hover:bg-slate-400 text-white text-sm font-bold py-2 px-3 rounded inline-flex items-center" onClick={onNext}>Next</button>

        </div>
      </div>

    </div>
  );
}
