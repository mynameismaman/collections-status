"use client";
import path from "path";
import CardImages from "../ui/card";
import Modal from "../ui/modal";
import { useState } from "react";
import Image from "next/image";

type ImgData = {
  imgName: string;
  fileSorted: Date;
};

export default function ShowImages({datas}:{datas:array}) {
  const [show, setShow] = useState(false);
  const [imageName, setImageName] = useState("2_001.png");

  function handleClick(){
    setShow(true);
  }

  function showImage(name){
    setImageName(name);
    setShow(true);
  }

  return (
    <div className="flex flex-row flex-wrap gap-3 items-start justify-around columns-1 md:columns-2 lg:columns-3">
      {datas.map((name, index) => (
        <CardImages fileName={name.imgName} key={index} show={()=> showImage(name.imgName)}/>
      ))}
      <Modal open={show} onClose={() => setShow(false)}>
        <Image src={"/images/" + imageName} alt={imageName} layout="fill" objectFit="scale-down" className="p-4"/>
        <div>OK</div>
        <div>OK2</div>
      </Modal>
    </div>
  );
}
