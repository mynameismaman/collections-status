import Image from "next/legacy/image";

export default function CardImages({ fileName, show, download }: { fileName: string; show:()=>void; download:()=>void; }) {
  return (
    <div className="flex flex-col w-60 h-fit rounded overflow-hidden shadow-lg">
      <Image className="object-contain"
        src={"/images/" + fileName}
        alt={fileName}
        width={500}
        height={500}
      />
      <div className="p-1 text-sm flex flex-row justify-between">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-bold py-1 px-2 rounded inline-flex items-center" onClick={download}>
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2">
  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
</svg>

          <span>View</span>
        </button>
      </div>
    </div>
  );
}
