import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  subsets:['latin'],
  weight:['400','700']
});

export default function Home() {
  return (
    <main className={`flex h-screen min-h-screen flex-col items-center justify-center ${roboto_mono.className}`}>
      <div className="w-96 text-center text-sm rounded border-2 p-2 border-slate-200 bg-slate-100 justify-center item-center">
        <p>Github :  </p>
      </div>
    </main>
  );
}

