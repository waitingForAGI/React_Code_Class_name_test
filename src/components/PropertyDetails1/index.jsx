import { Heading, Img } from "./..";
import React from "react";

export default function PropertyDetails1({
  bedroomImage = "images/img_icon.svg",
  bedroomText = "3 Bed Room",
  bathroomImage = "images/img_icon_gray_700.svg",
  bathroomText = "1 Bath",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center self-stretch flex-1`}>
      <div className="flex w-full items-center gap-3">
        <Img src={bedroomImage} alt="3 Bed Room" className="h-[20px] w-[20px] self-start" />
        <Heading className="text-[16px] font-semibold text-gray-700">{bedroomText}</Heading>
      </div>
      <div className="flex w-full items-center justify-center gap-3 px-14 md:px-5">
        <Img src={bathroomImage} alt="1 Bath" className="h-[20px] w-[20px] self-start" />
        <Heading className="text-[16px] font-semibold text-gray-700">{bathroomText}</Heading>
      </div>
    </div>
  );
}
