import { Heading, Button, Img } from "./..";
import React from "react";

export default function PropertyDetails({
  mainImage = "images/img_image.png",
  addressText = "2861 62nd Ave, Oakland, CA 94605",
  bedroomText = "3 Bed Room",
  bathroomText = "1 Bath",
  sqftText = "1,032 sqft",
  familyText = "Family",
  viewDetailsButton = "View Details",
  priceText = "$649,900",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <Img src={mainImage} alt="Image" className="h-[260px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover" />
      <div className="self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-red-100 bg-gray-50 px-5 py-[30px] sm:py-5">
        <div className="flex flex-col gap-[22px]">
          <div className="flex gap-3">
            <Img src="images/img_icon_map_2.svg" alt="Image" className="h-[24px] w-[24px]" />
            <Heading as="p" className="self-end text-[16px] font-semibold text-darkslategray">
              {addressText}
            </Heading>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div className="flex w-full items-center gap-3">
                <Img src="images/img_icon.svg" alt="3 Bed Room" className="h-[20px] w-[20px] self-start" />
                <Heading as="p" className="text-[16px] font-semibold text-gray-700">
                  {bedroomText}
                </Heading>
              </div>
              <div className="flex w-full items-center gap-3 px-5">
                <Img src="images/img_icon_gray_700.svg" alt="1 Bath" className="h-[20px] w-[20px] self-start" />
                <Heading as="p" className="text-[16px] font-semibold text-gray-700">
                  {bathroomText}
                </Heading>
              </div>
            </div>
            <div className="flex">
              <div className="flex w-full items-center gap-3">
                <Img
                  src="images/img_icon_gray_700_20x20.svg"
                  alt="1032 Sqft"
                  className="h-[20px] w-[20px] self-start"
                />
                <Heading as="p" className="text-[16px] font-semibold text-gray-700">
                  {sqftText}
                </Heading>
              </div>
              <div className="flex w-full items-center gap-3 px-5">
                <Img src="images/img_menu.svg" alt="Family" className="h-[20px] w-[20px] self-start" />
                <Heading as="p" className="text-[16px] font-semibold text-gray-700">
                  {familyText}
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[31px]">
            <Button shape="round" className="min-w-[156px] rounded-[10px] px-[30px] font-semibold sm:px-5">
              {viewDetailsButton}
            </Button>
            <Heading size="headingxxl" as="h5" className="text-[24px] font-bold tracking-[-0.48px] text-darkslategray">
              {priceText}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
