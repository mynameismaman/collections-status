import fs from "fs";
import path from "path";

type ImgData = {
  imgName: string;
  fileSorted: Date;
};

export default function GetData() {
  const imgDir = path.join(process.cwd(), "public", "images");
  const imgNames = fs.readdirSync(imgDir);
  const imgValid = imgNames.filter((imgName) =>
    /\.(jpg|jpeg|png)$/i.test(imgName)
  );
  const imgDate: ImgData[] = imgValid.map((imgName) => {
    const filePath = path.join(imgDir, imgName);
    const fileStat = fs.statSync(filePath);
    const fileSorted = fileStat.mtime;
    return {
      imgName,
      fileSorted,
    };
  });
  const imgSorted = imgDate.sort(
    (x, y) => y.fileSorted.getTime() - x.fileSorted.getTime()
  );
  return imgSorted;
}
