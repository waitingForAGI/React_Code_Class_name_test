import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({ userImage = "images/img_icon_24px_user.svg", userName = "Full Name", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-3.5 border-blue_gray-100_01 border border-solid bg-white flex-1 rounded-[10px]`}
    >
      <div className="flex w-full items-center gap-3.5">
        <Img src={userImage} alt="Full Name" className="h-[24px] w-[24px]" />
        <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
          {userName}
        </Heading>
      </div>
    </div>
  );
}
