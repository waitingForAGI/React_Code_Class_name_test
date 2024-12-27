import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const contactInfoList = [
  { userImage: "images/img_icon_24px_user.svg", userName: "Full Name" },
  { userImage: "images/img_icon_24px_email_dark_-_2.svg", userName: "Email Address" },
  { userImage: "images/img_icon_24px_call_dark_-_2.svg", userName: "Phone Number" },
];

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Relasto - Get in Touch with Our Real Estate Experts</title>
        <meta
          name="description"
          content="Reach out to Relasto for all your real estate needs. Our office in Los Angeles is ready to assist you with your inquiries. Send us a message or visit our office for personalized service and expert advice."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-gray-50 md:gap-[75px] sm:gap-[50px]">
        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
          <Header />
          <div className="flex">
            <div className="container-xs flex flex-col gap-[42px] md:px-5">
              <div className="flex flex-col items-center gap-4">
                <Heading
                  size="headingxxxxxxl"
                  as="h1"
                  className="text-[54px] font-extrabold tracking-[-1.08px] text-darkslategray md:text-[46px] sm:text-[40px]"
                >
                  Get in touch
                </Heading>
                <Text
                  size="textlg"
                  as="p"
                  className="self-stretch text-center text-[18px] font-normal leading-[180%] text-dark___2"
                >
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble.
                </Text>
              </div>
              <div className="flex items-start justify-center gap-[50px] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white px-6 py-[50px] md:flex-col md:py-5 sm:p-5">
                <div className="flex flex-1 flex-col gap-10 self-center md:self-stretch">
                  <div className="flex flex-col items-start justify-center gap-4">
                    <Heading
                      size="h___4_web___1800"
                      as="h2"
                      className="text-[28px] font-extrabold tracking-[-0.56px] text-darkslategray md:text-[26px] sm:text-[24px]"
                    >
                      Send a message
                    </Heading>
                    <div className="flex flex-col gap-3 self-stretch">
                      <div className="flex flex-col gap-3">
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {contactInfoList.map((d, index) => (
                            <UserProfile {...d} key={"contactOne" + index} />
                          ))}
                        </Suspense>
                      </div>
                      <div className="flex rounded-[10px] border border-solid border-blue_gray-100_01 bg-white px-[18px] py-4">
                        <Heading size="headinglg" as="h3" className="mb-[90px] text-[18px] font-semibold text-dark___2">
                          Address
                        </Heading>
                      </div>
                      <div className="flex rounded-[10px] border border-solid border-blue_gray-100_01 bg-white p-[18px]">
                        <Heading size="headinglg" as="h4" className="mb-[86px] text-[18px] font-semibold text-dark___2">
                          Message
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="xl"
                    shape="round"
                    className="self-stretch rounded-[10px] px-[34px] font-semibold sm:px-5"
                  >
                    Send Request
                  </Button>
                </div>
                <div className="h-[534px] w-px bg-blue_gray-100_01 md:h-px md:w-[534px] md:px-5" />
                <div className="flex flex-1 flex-col gap-10 md:self-stretch">
                  <div className="mr-6 flex flex-col gap-3.5 md:mr-0">
                    <div className="flex flex-col items-start gap-1">
                      <Heading
                        size="headingxl"
                        as="h5"
                        className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                      >
                        Office Address
                      </Heading>
                      <Heading
                        size="headinglg"
                        as="h6"
                        className="text-[18px] font-semibold leading-[180%] text-dark___2"
                      >
                        <>
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </>
                      </Heading>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-[13px]">
                        <Img
                          src="images/img_icon_24px_call_dark_-_2.svg"
                          alt="Icon24pxcall"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex items-center gap-3">
                        <Img
                          src="images/img_icon_24px_email_dark_-_2.svg"
                          alt="Icon24pxemail"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading size="headinglg" as="p" className="self-end text-[18px] font-semibold text-dark___2">
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading
                      size="headingxl"
                      as="h6"
                      className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                    >
                      Social
                    </Heading>
                    <div className="flex gap-4 self-stretch">
                      <Img src="images/img_social_icon_facebook.svg" alt="Socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_linkedin.svg" alt="Socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_twitter.svg" alt="Socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_youtube.svg" alt="Socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_rss.svg" alt="Socialiconrss" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
