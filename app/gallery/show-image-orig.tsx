//"use client";
import fs from "fs";
import path from "path";
import CardImages from "../ui/card";
//import Modal from "../ui/modal";
//import { useState } from "react";
import GetData from "./data";

type ImgData = {
  imgName: string;
  fileSorted: Date;
};

export default function ShowImages() {
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

  // const [show, setShow] = useState(false);
  /** return (
    <div>
      <p>Assalamualaikum</p>
      <ul>
        {imgValid.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <br />
      {imgNames}
      <br />
      {imgDir}
      <br />
      {JSON.stringify(imgDate)}
      <br />
      <br />
      <br />
      {JSON.stringify(imgSorted)}
    </div>
  );**/
  /**  return (
    <>
      <CardImages />
    </>
  );**/
  return (
    <div className="flex flex-row flex-wrap gap-3 items-start justify-around columns-1 md:columns-2 lg:columns-3">
      {imgSorted.map((name, index) => (
        <CardImages fileName={name.imgName} key={index} />
      ))}
      {/**<Modal open={show} onClose={() => setShow(false)}>
        Ini modal
    </Modal>**/}
      {JSON.stringify(imgSorted)}
      <br />
      <br />
      <br />
      {JSON.stringify(imgValid)}
      ++++++++++++++++++++++++++++++++++++++++<div></div>Ini Baru ->
      {JSON.stringify(GetData())}
    </div>
  );
}
