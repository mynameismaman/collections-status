import ShowImages from "./show-image";
import GetData from "@/app/gallery/getData"

export default function Page() {
  const datas = GetData();
  return (
    <div className="p-6">
      <ShowImages datas={datas}/>
    </div>
  );
}
