import { Helmet } from "react-helmet";
import { SelectBox, Img, Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PropertyDetails from "../../components/PropertyDetails";
import UserProfileReview from "../../components/UserProfileReview";
import React, { Suspense } from "react";

const testimonialList = [
  {
    descriptionText:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewCounterText: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userPosition: "Product Manager - Static Mania",
  },
  {
    descriptionText:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewCounterText: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userPosition: "Product Manager - Static Mania",
  },
  {
    descriptionText:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewCounterText: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userPosition: "Product Manager - Static Mania",
  },
];
const propertyCardsGrid = [
  {
    mainImage: "images/img_image.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
  {
    mainImage: "images/img_image_260x384.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
  {
    mainImage: "images/img_image_1.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
  {
    mainImage: "images/img_image_2.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
  {
    mainImage: "images/img_image_3.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
  {
    mainImage: "images/img_image_4.png",
    addressText: "2861 62nd Ave, Oakland, CA 94605",
    bedroomText: "3 Bed Room",
    bathroomText: "1 Bath",
    sqftText: "1,032 sqft",
    familyText: "Family",
    viewDetailsButton: "View Details",
    priceText: "$649,900",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentProfilePage() {
  return (
    <>
      <Helmet>
        <title>Bruno Fernandes - Experienced Real Estate Agent Profile</title>
        <meta
          name="description"
          content="Discover the professional profile of Bruno Fernandes, a highly rated real estate agent with over 15 years of experience in California. Specializing in private houses, villas, and apartments, Bruno offers a personalized approach to finding your dream home."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-gray-50 md:gap-[75px] sm:gap-[50px]">
        <div>
          <Header />
          <div>
            <Img
              src="images/img_cover_image.png"
              alt="Coverimage"
              className="h-[250px] w-full object-cover md:h-auto"
            />
            <div className="relative mt-[-46px] flex flex-col gap-[58px] sm:gap-[29px]">
              <div className="flex items-center justify-center px-14 md:flex-col md:px-5">
                <Img
                  src="images/img_rectangle_5599.png"
                  alt="Image Twelve"
                  className="h-[150px] w-[150px] rounded-[10px] object-cover md:w-full"
                />
                <div className="flex w-[76%] items-center justify-center self-end md:w-full md:flex-col">
                  <div className="flex flex-1 items-center px-[30px] md:flex-col md:self-stretch sm:px-5">
                    <div className="flex flex-1 flex-col items-start gap-1 md:self-stretch">
                      <Heading
                        size="headingxxl"
                        as="h1"
                        className="text-[24px] font-bold tracking-[-0.48px] text-darkslategray md:text-[22px]"
                      >
                        Bruno Fernandes
                      </Heading>
                      <div className="flex items-center self-stretch">
                        <div className="flex">
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img
                            src="images/img_icon_16px_start_dark_-_2.svg"
                            alt="Image"
                            className="h-[16px] w-[16px]"
                          />
                        </div>
                        <Heading as="h2" className="text-[16px] font-semibold text-darkslategray">
                          4.5 review
                        </Heading>
                      </div>
                    </div>
                    <div className="mr-[30px] flex w-[46%] flex-col gap-2 md:mr-0 md:w-full">
                      <div className="flex items-center gap-[13px]">
                        <Img src="images/img_icon_24px_call.svg" alt="Icon24pxcall" className="h-[24px] w-[24px]" />
                        <Heading size="headinglg" as="h3" className="text-[18px] font-semibold text-darkslategray">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex items-center gap-3">
                        <Img src="images/img_icon_24px_email.svg" alt="Icon24pxemail" className="h-[24px] w-[24px]" />
                        <Heading
                          size="headinglg"
                          as="h4"
                          className="self-end text-[18px] font-semibold text-darkslategray"
                        >
                          bruno@relasto .com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button shape="round" className="min-w-[112px] rounded-[10px] px-6 font-semibold sm:px-5">
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex">
                <div className="container-xs flex flex-col gap-12 md:px-5">
                  <div className="flex gap-3 md:flex-col">
                    <Button size="md" shape="round" className="w-full rounded-[10px] px-[34px] font-semibold sm:px-5">
                      For rent
                    </Button>
                    <Button
                      size="md"
                      variant="outline"
                      shape="round"
                      className="w-full rounded-[10px] !border px-[33px] font-semibold sm:px-5"
                    >
                      For sale
                    </Button>
                    <Button
                      size="md"
                      variant="outline"
                      shape="round"
                      className="w-full rounded-[10px] !border px-[33px] font-semibold sm:px-5"
                    >
                      About
                    </Button>
                    <Button
                      size="md"
                      variant="outline"
                      shape="round"
                      className="w-full rounded-[10px] !border px-[33px] font-semibold sm:px-5"
                    >
                      Review
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 justify-center gap-6 gap-y-6 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {propertyCardsGrid.map((d, index) => (
                        <PropertyDetails {...d} key={"agentProfile1" + index} />
                      ))}
                    </Suspense>
                  </div>
                  <div className="flex justify-center sm:flex-col">
                    <div className="flex flex-1 sm:self-stretch">
                      <Button
                        variant="outline"
                        shape="round"
                        className="min-w-[48px] rounded-[10px] !border px-[19px] font-semibold"
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        shape="round"
                        className="ml-1 min-w-[48px] rounded-[10px] !border px-[17px] font-semibold"
                      >
                        2
                      </Button>
                      <Button
                        variant="outline"
                        shape="round"
                        className="ml-1 min-w-[48px] rounded-[10px] !border px-[17px] font-semibold"
                      >
                        3
                      </Button>
                      <Button
                        variant="outline"
                        shape="round"
                        className="ml-1 min-w-[48px] rounded-[10px] !border px-[17px] font-semibold"
                      >
                        4
                      </Button>
                      <Button
                        variant="outline"
                        shape="round"
                        className="ml-1 min-w-[48px] rounded-[10px] !border px-[17px] font-semibold"
                      >
                        5
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_icon_16px_arrow_right.svg"
                          alt="Icon / 16px / Arrow - Right"
                          className="mb-1.5 mt-0.5 h-[16px] w-[16px] object-contain"
                        />
                      }
                      className="min-w-[134px] gap-1 rounded-[10px] !border px-[17px] font-semibold"
                    >
                      Next Page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="container-xs flex justify-center rounded-[10px] border border-solid border-blue_gray-100_01 bg-white p-[42px] md:p-5">
            <div className="flex w-full items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[46%] flex-col gap-14 self-center md:w-full sm:gap-7">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-[30px] sm:flex-col">
                    <Img
                      src="images/img_rectangle_5616.png"
                      alt="Image"
                      className="h-[182px] w-[182px] rounded-[10px] object-cover sm:w-full"
                    />
                    <div className="flex flex-1 flex-col items-start sm:self-stretch">
                      <Heading
                        size="headingxxl"
                        as="h2"
                        className="text-[24px] font-bold tracking-[-0.48px] text-darkslategray md:text-[22px]"
                      >
                        Bruno Fernandes
                      </Heading>
                      <div className="flex items-center self-stretch">
                        <div className="flex">
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image" className="h-[16px] w-[16px]" />
                          <Img src="images/img_icon_16px_start.svg" alt="Image Ten" className="h-[16px] w-[16px]" />
                          <Img
                            src="images/img_icon_16px_start_dark_-_2.svg"
                            alt="Image Eleven"
                            className="h-[16px] w-[16px]"
                          />
                        </div>
                        <Heading as="h3" className="text-[16px] font-semibold text-darkslategray">
                          4.5 review
                        </Heading>
                      </div>
                      <div className="mt-1.5 flex items-center gap-[13px] self-stretch">
                        <Img src="images/img_icon_24px_call.svg" alt="Icon24pxcall" className="h-[24px] w-[24px]" />
                        <Heading size="headinglg" as="h4" className="text-[18px] font-semibold text-darkslategray">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="mt-1.5 flex items-center gap-3 self-stretch">
                        <Img src="images/img_icon_24px_email.svg" alt="Icon24pxemail" className="h-[24px] w-[24px]" />
                        <Heading
                          size="headinglg"
                          as="h5"
                          className="self-end text-[18px] font-semibold text-darkslategray"
                        >
                          bruno@relasto .com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Text size="textlg" as="p" className="text-[18px] font-normal leading-[180%] text-dark___2">
                    <>
                      A slider is great way to display a slideshow featuring images or videos, usually on your
                      homepage.Adding sliders to your site is no longer difficult. You don’t have to know coding
                      anymore. Just use a slider widget and it will automatically insert the slider on your web page.
                      <br />
                      One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.{" "}
                    </>
                  </Text>
                </div>
                <Button shape="round" className="self-stretch rounded-[10px] px-[34px] font-semibold sm:px-5">
                  Contact
                </Button>
              </div>
              <div className="flex w-[46%] flex-col gap-[22px] md:w-full">
                <div className="flex flex-col items-start gap-2">
                  <Heading
                    size="headingxl"
                    as="h6"
                    className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                  >
                    Experiences
                  </Heading>
                  <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
                    15+ years experience
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Heading
                    size="headingxl"
                    as="h6"
                    className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                  >
                    Property Types
                  </Heading>
                  <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
                    Private House, Villa, Townhouse, Apartment
                  </Heading>
                </div>
                <div className="flex flex-col items-start justify-center gap-1.5">
                  <Heading
                    size="headingxl"
                    as="h6"
                    className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                  >
                    Area
                  </Heading>
                  <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-darkslategray">
                    California, San Jose, Miami
                  </Heading>
                </div>
                <div className="flex flex-col items-start justify-center gap-1.5">
                  <Heading
                    size="headingxl"
                    as="h6"
                    className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                  >
                    Address
                  </Heading>
                  <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
                    59 Orchard, NY 5005, US
                  </Heading>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                    <Heading
                      size="headingxl"
                      as="h6"
                      className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                    >
                      License No
                    </Heading>
                    <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2">
                      BF-0535
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-1.5">
                    <Heading
                      size="headingxl"
                      as="h6"
                      className="text-[20px] font-semibold tracking-[-0.40px] text-darkslategray"
                    >
                      Website
                    </Heading>
                    <a href="www.abc.com" target="_blank" rel="noreferrer">
                      <Heading size="headinglg" as="p" className="text-[18px] font-semibold text-dark___2 underline">
                        www.abc.com
                      </Heading>
                    </a>
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
        <div className="flex">
          <div className="container-xs rounded-[10px] border border-solid border-blue_gray-100_01 bg-white py-[30px] md:px-5 sm:p-5">
            <div className="flex flex-col gap-[38px]">
              <div className="flex flex-col gap-[22px]">
                <div className="flex items-center justify-between gap-5 px-[42px] md:px-5">
                  <Heading
                    size="h___4_web___1800"
                    as="h2"
                    className="text-[28px] font-extrabold tracking-[-0.56px] text-darkslategray md:text-[26px] sm:text-[24px]"
                  >
                    Clients Review
                  </Heading>
                  <Button
                    size="xl"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_icon_24px_plus.svg"
                        alt="Icon / 24px / Plus"
                        className="mb-1 mt-0.5 h-[20px] w-[20px] object-contain"
                      />
                    }
                    className="min-w-[190px] gap-2.5 rounded-[10px] px-4 font-bold"
                  >
                    Write a Reveiw
                  </Button>
                </div>
                <div className="h-px bg-blue_gray-100_01" />
              </div>
              <div className="flex flex-col items-start gap-6 px-6 sm:px-5">
                <div className="flex flex-col gap-6 self-stretch">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {testimonialList.map((d, index) => (
                      <UserProfileReview {...d} key={"agentProfile" + index} />
                    ))}
                  </Suspense>
                </div>
                <SelectBox
                  shape="round"
                  indicator={
                    <Img src="images/img_arrowdown_darkslategray.svg" alt="Arrow Down" className="h-[16px] w-[16px]" />
                  }
                  name="buttonmedium"
                  placeholder={`See more`}
                  options={dropDownOptions}
                  className="w-[10%] gap-1 rounded-[10px] !border px-[18px] font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
