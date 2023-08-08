import React from "react";
import Image from "next/image";
type ContainerType = {
  textBold: string;
  textNormal: string;
  imageIcon: string;
};

export default function IconTextContainer(props: ContainerType) {
  return (
    <div className="flex flex-col gap-4 sm:items-start items-center text-center sm:text-start p-2 ">
      <Image src={props.imageIcon} alt={""} />
      <p className="">{props.textBold}</p>
      <p className=""> {props.textNormal}</p>
    </div>
  );
}
