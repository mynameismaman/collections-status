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

export default function ShowImages({datas}:{datas:Array<any>}) {
  const [show, setShow] = useState(false);
  const [imageName, setImageName] = useState("");
  const [indexImage, setIndexImage] = useState(0);
  const {download} = useDownloader();

  function handleClick(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
    setImageName("");
    setIndexImage(0);
  }
  
  function showImage(name:any,index:any){
    setImageName(name);
    setIndexImage(index);
    setShow(true);
  }

  function handleDownload(name:any){
    download("/images/" + name, name);
  }

  function handleNext(){
    indexImage < datas.length-1 && setIndexImage(indexImage + 1);
  }
  
  function handlePrevious(){
    indexImage > 0 && setIndexImage(indexImage - 1);
  }

  const filterData = datas.filter((item,index)=> index === indexImage);

  return (
    <div className="flex flex-row flex-wrap gap-3 items-start justify-around columns-1 md:columns-2 lg:columns-3">
      {datas.map((name, index) =>( 
        <CardImages fileName={name.imgName} key={index} show={()=> showImage(name.imgName,index)} download={()=>handleDownload(name.imgName)}/>
      ))}
      <Modal onClose={handleClose} open={show} download={()=>handleDownload(imageName)} onNext={handleNext} onPrevious={handlePrevious}>
        {show ?filterData.map((name, index) =>(
<Image src={"/images/" + name.imgName} alt={name.imgName} key={index} layout="fill" objectFit="scale-down" className="p-4"/>
      )) :null}
    </Modal>
    </div>
  );
}
