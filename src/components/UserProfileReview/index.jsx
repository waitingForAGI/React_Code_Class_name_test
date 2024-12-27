import { Heading, Img } from "./..";
import React from "react";

export default function UserProfileReview({
  descriptionText = "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
  reviewCounterText = "4.5 review",
  reviewDate = "02 June 2022",
  userName = "Taylor Wilson",
  userPosition = "Product Manager - Static Mania",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch px-[30px] py-[38px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white flex-1 rounded-[20px]`}
    >
      <div className="flex w-full flex-col gap-10">
        <Heading
          size="headingxxl"
          as="h5"
          className="text-[24px] font-semibold leading-[165%] text-dark___2 md:text-[22px]"
        >
          {descriptionText}
        </Heading>
        <div className="flex flex-col gap-6">
          <div className="flex">
            <div className="flex items-center">
              <div className="flex gap-2">
                <Img src="images/img_icon_24px_active.svg" alt="Image" className="h-[24px] w-[24px]" />
                <Img src="images/img_icon_24px_active.svg" alt="Image" className="h-[24px] w-[24px]" />
                <Img src="images/img_icon_24px_active.svg" alt="45 Review" className="h-[24px] w-[24px]" />
                <Img src="images/img_icon_24px_unactive.svg" alt="45 Review" className="h-[24px] w-[24px]" />
              </div>
              <Heading size="headingxl" as="h6" className="text-[20px] font-semibold tracking-[-0.40px] text-dark___2">
                {reviewCounterText}
              </Heading>
            </div>
            <Heading size="headingxl" as="h6" className="text-[20px] font-semibold tracking-[-0.40px] text-dark___2">
              {reviewDate}
            </Heading>
          </div>
          <div className="flex items-center gap-4">
            <Img
              src="images/img_ellipse_2695.png"
              alt="Taylor Wilson"
              className="h-[80px] w-[80px] rounded-[40px] object-cover"
            />
            <div className="flex flex-1 flex-col items-start justify-center self-end">
              <Heading
                size="h___4_web___1800"
                as="h4"
                className="text-[28px] font-extrabold tracking-[-0.56px] text-darkslategray md:text-[26px] sm:text-[24px]"
              >
                {userName}
              </Heading>
              <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-darkslategray">
                {userPosition}
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
