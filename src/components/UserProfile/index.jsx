import { Button, Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_rectangle_5615.png",
  userName = "Bruno Fernandes",
  userReview = "4.5 review",
  viewProfileButton = "View Profile",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <Img
        src={userImage}
        alt="Bruno Fernandes"
        className="h-[282px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-blue_gray-100_01 bg-white p-3.5">
        <div className="mx-1.5 flex flex-col items-start gap-2">
          <Heading size="headingxl" className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray">
            {userName}
          </Heading>
          <div className="flex items-center self-stretch">
            <div className="flex">
              <Img src="images/img_icon_16px_start.svg" alt="Bruno Fernandes" className="h-[16px] w-[16px]" />
              <Img src="images/img_icon_16px_start.svg" alt="Bruno Fernandes" className="h-[16px] w-[16px]" />
              <Img src="images/img_icon_16px_start.svg" alt="Bruno Fernandes" className="h-[16px] w-[16px]" />
              <Img src="images/img_icon_16px_start.svg" alt="Bruno Fernandes" className="h-[16px] w-[16px]" />
              <Img src="images/img_icon_16px_start_dark_-_2.svg" alt="Bruno Fernandes" className="h-[16px] w-[16px]" />
            </div>
            <Heading className="text-[16px] font-semibold text-darkslategray">{userReview}</Heading>
          </div>
          <Button
            variant="outline"
            shape="round"
            className="self-stretch rounded-[10px] !border px-[33px] font-semibold sm:px-5"
          >
            {viewProfileButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
