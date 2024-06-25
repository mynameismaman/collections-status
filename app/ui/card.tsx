import Image from "next/image";

export default function CardImages({ fileName, show }: { fileName: string; show:()=>void; }) {
  return (
    <div className="flex flex-col w-56 h-fit rounded overflow-hidden shadow-lg ">
      <Image className="object-contain h-60"
        src={"/images/" + fileName}
        alt={fileName}
        width={250}
        height={300}
      />
      <div className="p-1 text-sm flex flex-row justify-between">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-bold py-1 px-2 rounded inline-flex items-center" >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded inline-flex items-center" onClick={show}>
          <span>View</span>
        </button>
      </div>
    </div>
  );
}
