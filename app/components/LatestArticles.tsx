import React from "react";
import Image, { StaticImageData } from "next/image";

type ArticalType = {
  Images: StaticImageData;
  smallText: string;
  boldText: string;
  normalText: string;
};

export default function LatestArticles(props: ArticalType) {
  return (
    <div className="p-2 flex flex-col gap-4 text-left">
      <Image src={props.Images} alt={""} />
      <div className="flex flex-col sm:p-2 gap-2">
        <p className="text-xs">{props.smallText}</p>
        <p className="text-lg ">{props.boldText}</p>
        <p className="text-sm">{props.normalText}</p>
      </div>
    </div>
  );
}
