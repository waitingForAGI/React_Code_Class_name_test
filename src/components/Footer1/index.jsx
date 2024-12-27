import { Heading, Img, Text } from "./..";
import React from "react";

export default function Footer1({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center px-14 py-[72px] md:p-5 bg-white`}
    >
      <div className="mx-auto mt-1.5 flex w-full max-w-[1164px] flex-col items-start gap-28 md:gap-[84px] sm:gap-14">
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[42%] items-center justify-center md:w-full sm:flex-col">
            <div className="flex flex-1 flex-col gap-[42px] sm:self-stretch">
              <div className="flex items-start gap-[11px]">
                <Img src="images/img_real_estate_1.svg" alt="Realestateone" className="h-[40px] w-[40px] self-center" />
                <Text className="font-markoone text-[20px] font-normal text-orange-a700">Relasto</Text>
              </div>
              <div className="flex flex-col gap-7">
                <Heading className="text-[16px] font-semibold leading-[160%] text-darkslategray">
                  <>
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </>
                </Heading>
                <div className="flex flex-col items-start justify-center gap-1">
                  <Heading className="text-[16px] font-semibold text-darkslategray">+(123) 456-7890</Heading>
                  <Heading className="text-[16px] font-semibold text-darkslategray">info@mail.com</Heading>
                </div>
                <div className="flex gap-3">
                  <Img src="images/img_icon_facebook.svg" alt="Iconfacebook" className="h-[30px] w-[30px]" />
                  <Img src="images/img_icon_twitter.svg" alt="Icontwitter" className="h-[30px] w-[30px]" />
                  <Img src="images/img_icon_instragram.svg" alt="Iconinstragram" className="h-[30px] w-[30px]" />
                  <Img src="images/img_icon_linked_in.svg" alt="Iconlinkedin" className="h-[30px] w-[30px]" />
                  <Img src="images/img_icon_youtube.svg" alt="Iconyoutube" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
            <div className="flex w-[30%] flex-col items-start gap-3.5 sm:w-full">
              <Heading size="headinglg" className="text-[18px] font-bold text-darkslategray">
                Features
              </Heading>
              <div className="flex flex-col items-start gap-3.5 self-stretch">
                <Heading className="text-[16px] font-semibold text-darkslategray">Home v1</Heading>
                <Heading className="text-[16px] font-semibold text-darkslategray">Home v2</Heading>
                <Heading className="text-[16px] font-semibold text-darkslategray">About</Heading>
                <Heading className="text-[16px] font-semibold text-darkslategray">Contact</Heading>
                <Heading className="text-[16px] font-semibold text-darkslategray">Search</Heading>
              </div>
            </div>
          </div>
          <div className="flex w-[12%] flex-col items-start gap-3.5 md:w-full">
            <Heading size="headinglg" className="text-[18px] font-bold text-darkslategray">
              Information
            </Heading>
            <div className="flex flex-col items-start gap-3.5 self-stretch">
              <Heading className="text-[16px] font-semibold text-darkslategray">Listing v1</Heading>
              <Heading className="text-[16px] font-semibold text-darkslategray">Listing v2</Heading>
              <Heading className="text-[16px] font-semibold text-darkslategray">Property Details</Heading>
              <Heading className="text-[16px] font-semibold text-darkslategray">Agent List</Heading>
              <Heading className="text-[16px] font-semibold text-darkslategray">Agent Profile</Heading>
            </div>
          </div>
          <div className="flex w-[30%] items-start justify-between gap-5 md:w-full">
            <div className="flex w-[66%] flex-col items-start gap-3.5">
              <Heading size="headinglg" className="text-[18px] font-bold text-darkslategray">
                Documentation{" "}
              </Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Blog</Heading>
                  </a>
                </li>
                <li>
                  <a href="FAQ" target="_blank" rel="noreferrer">
                    <Heading className="text-[16px] font-semibold text-darkslategray">FAQ</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Privacy Policy</Heading>
                  </a>
                </li>
                <li>
                  <a href="License" target="_blank" rel="noreferrer">
                    <Heading className="text-[16px] font-semibold text-darkslategray">License</Heading>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3.5 self-center">
              <Heading size="headinglg" className="text-[18px] font-bold text-darkslategray">
                Others
              </Heading>
              <ul className="flex flex-col items-start gap-3.5">
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Log in</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Enter OTP</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">New Password</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Reset Password</Heading>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Heading className="text-[16px] font-semibold text-darkslategray">Create Account</Heading>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Heading className="text-[16px] font-semibold text-darkslategray">© 2022. All rights reserved.</Heading>
      </div>
    </footer>
  );
}
