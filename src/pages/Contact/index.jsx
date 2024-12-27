import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text, Input } from "../../components";
import Footer1 from "../../components/Footer1";
import { CloseSVG } from "../../components/Input/close";
import MegaMenu1 from "../../components/MegaMenu1";
import PropertyDetails1 from "../../components/PropertyDetails1";
import React, { Suspense } from "react";

const data = [
  { fullNameOne: "images/img_icon_24px_user.svg", default: "Full Name" },
  { fullNameOne: "images/img_icon_24px_email_dark_-_2.svg", default: "Email Address" },
  { fullNameOne: "images/img_icon_24px_call_dark_-_2.svg", default: "Phone Number" },
];

export default function ContactPage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Niralii&#39;s Application105</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-gray-50 md:gap-[75px] sm:gap-[50px]">
        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
          <header className="relative flex items-center justify-between gap-5 bg-white px-[120px] py-[18px] md:flex-col md:px-5">
            <div className="flex items-start gap-2.5">
              <a href="#">
                <Img src="images/img_real_estate_1.svg" alt="Realestateone" className="h-[40px] w-[40px] self-center" />
              </a>
              <Text className="font-markoone text-[20px] font-normal text-orange-a700">Relasto</Text>
            </div>
            <ul className="!mb-1.5 flex gap-10 self-end text-[16px] font-semibold text-darkslategray sm:flex-col">
              <li
                onMouseLeave={() => {
                  setMenuOpen(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-[7px]">
                  <Heading className="text-[16px] font-semibold text-darkslategray">Home</Heading>
                  <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[16px] w-[16px]" />
                </div>
                {menuOpen ? <MegaMenu1 /> : null}
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen1(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen1(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-1.5">
                  <Heading className="text-[16px] font-semibold text-darkslategray">Listing</Heading>
                  <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[16px] w-[16px]" />
                </div>
                {menuOpen1 ? <MegaMenu1 /> : null}
              </li>
              <li
                onMouseLeave={() => {
                  setMenuOpen2(false);
                }}
                onMouseEnter={() => {
                  setMenuOpen2(true);
                }}
              >
                <div className="flex cursor-pointer items-center gap-1.5">
                  <Heading className="text-[16px] font-semibold text-darkslategray">Agents</Heading>
                  <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[16px] w-[16px]" />
                </div>
                {menuOpen2 ? <MegaMenu1 /> : null}
              </li>
              <li>
                <a href="#">
                  <Heading className="text-[16px] font-semibold text-darkslategray">Property </Heading>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading className="text-[16px] font-semibold text-darkslategray">Blog</Heading>
                </a>
              </li>
            </ul>
            <div className="flex w-[18%] items-center justify-center gap-2.5 md:w-full">
              <Input
                shape="square"
                name="search"
                placeholder={`Search`}
                value={searchBarValue1}
                onChange={(e) => setSearchBarValue1(e.target.value)}
                prefix={
                  <Img
                    src="images/img_icon_24px_search.svg"
                    alt="Icon / 24px / Search"
                    className="h-[24px] w-[24px] object-contain"
                  />
                }
                suffix={
                  searchBarValue1?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="DarkSlateGray" />
                  ) : null
                }
                className="flex-grow gap-2 font-bold text-darkslategray"
              />
              <Button size="md" shape="round" className="min-w-[94px] rounded-[10px] px-6 font-semibold sm:px-5">
                Log in
              </Button>
            </div>
          </header>
          <div className="flex justify-center px-14 md:px-5">
            <div className="container-xs flex flex-col gap-[42px]">
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
                  className="self-stretch text-center text-[18px] font-normal leading-[180%] text-dark___2"
                >
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble.
                </Text>
              </div>
              <div className="flex items-start justify-center gap-[50px] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white px-6 py-[50px] md:flex-col md:py-5 sm:p-5">
                <div className="flex flex-1 flex-col gap-10 md:self-stretch">
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
                          {data.map((d, index) => (
                            <div
                              key={"contactOne" + index}
                              className="flex flex-1 self-stretch rounded-[10px] border border-solid border-blue_gray-100_01 bg-white p-3.5"
                            >
                              <div className="flex w-full items-center gap-3.5">
                                <Img src={d.fullNameOne} alt="Full Name" className="h-[24px] w-[24px]" />
                                <Heading size="headinglg" as="h3" className="text-[18px] font-semibold text-dark___2">
                                  {d.default}
                                </Heading>
                              </div>
                            </div>
                          ))}
                        </Suspense>
                      </div>
                      <div className="flex rounded-[10px] border border-solid border-blue_gray-100_01 bg-white px-[18px] py-4">
                        <Heading size="headinglg" as="h6" className="mb-[90px] text-[18px] font-semibold text-dark___2">
                          Address
                        </Heading>
                      </div>
                      <div className="flex rounded-[10px] border border-solid border-blue_gray-100_01 bg-white p-[18px]">
                        <Heading size="headinglg" className="mb-[86px] text-[18px] font-semibold text-dark___2">
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
                <div className="flex flex-1 flex-col gap-10 self-center md:self-stretch">
                  <div className="mr-6 flex flex-col gap-3.5 md:mr-0">
                    <div className="flex flex-col items-start gap-1">
                      <Heading
                        size="headingxl"
                        className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                      >
                        Office Address
                      </Heading>
                      <Heading size="headinglg" className="text-[18px] font-semibold leading-[180%] text-dark___2">
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
                        <Heading size="headinglg" className="text-[18px] font-semibold text-dark___2">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex items-center gap-3">
                        <Img
                          src="images/img_icon_24px_email_dark_-_2.svg"
                          alt="Icon24pxemail"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading size="headinglg" className="self-end text-[18px] font-semibold text-dark___2">
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading
                      size="headingxl"
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
                  <div className="mr-6 md:mr-0">
                    <Img
                      src="images/img_image.png"
                      alt="Image"
                      className="h-[260px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover md:h-auto"
                    />
                    <div className="rounded-bl-[10px] rounded-br-[10px] border border-solid border-red-100 bg-white px-5 py-[30px] sm:py-5">
                      <div className="flex flex-col gap-[22px]">
                        <div className="flex gap-3">
                          <Img src="images/img_icon_map_2.svg" alt="Iconmaptwo" className="h-[24px] w-[24px]" />
                          <Heading className="self-end text-[16px] font-semibold text-darkslategray">
                            2861 62nd Ave, Oakland, CA 94605
                          </Heading>
                        </div>
                        <div className="flex flex-col gap-4">
                          <PropertyDetails1 />
                          <PropertyDetails1
                            bedroomImage="images/img_icon_gray_700_20x20.svg"
                            bedroomText="1,032 sqft"
                            bathroomImage="images/img_menu.svg"
                            bathroomText="Family"
                          />
                        </div>
                        <div className="flex items-center gap-[31px]">
                          <Button
                            shape="round"
                            className="min-w-[214px] rounded-[10px] px-[34px] font-semibold sm:px-5"
                          >
                            View Details
                          </Button>
                          <Heading
                            size="headingxxl"
                            className="text-[24px] font-bold tracking-[-0.48px] text-darkslategray md:text-[22px]"
                          >
                            $649,900
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    </>
  );
}
