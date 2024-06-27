"use client";
import path from "path";
import CardImages from "../ui/card";
import Modal from "../ui/modal";
import { useState } from "react";
import Image from "next/legacy/image";
import useDownloader from "react-use-downloader";

type ImgData = {
  imgName: string;
  fileSorted: Date;
};

export default function ShowImages({datas}:{datas:array}) {
  const [show, setShow] = useState(false);
  const [imageName, setImageName] = useState("");
  const {download} = useDownloader();

  function handleClick(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
    setImageName("");
  }
  
  function showImage(name){
    setImageName(name);
    setShow(true);
  }

  function handleDownload(name){
    download("/images/" + name, name);
  }

  return (
    <div className="flex flex-row flex-wrap gap-3 items-start justify-around columns-1 md:columns-2 lg:columns-3">
      {datas.map((name, index) =>( 
        <CardImages fileName={name.imgName} key={index} show={()=> showImage(name.imgName)} download={()=>handleDownload(name.imgName)}/>
      ))}
      <Modal onClose={handleClose} open={show} download={()=>handleDownload(imageName)}>
        {show ? (<Image src={"/images/" + imageName} alt={imageName} layout="fill" objectFit="scale-down" className="p-4"/>):null}
    </Modal>
    </div>
  );
}
