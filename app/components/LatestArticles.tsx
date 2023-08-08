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
    <div className="flex flex-col">
      <Image src={props.Images} alt={""} />
      <div className="flex flex-col sm:p-2">
        <p className="">{props.smallText}</p>
        <p className="">{props.boldText}</p>
        <p className="">{props.normalText}</p>
      </div>
    </div>
  );
}
