import { Helmet } from "react-helmet";
import { Button, Img, SelectBox, Input, Heading, Text } from "../../components";
import Footer1 from "../../components/Footer1";
import { CloseSVG } from "../../components/Input/close";
import MegaMenu1 from "../../components/MegaMenu1";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const agentProfilesGrid = [
  {
    userImage: "images/img_rectangle_5615.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5616_282x282.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5614.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5614_282x282.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5617.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5618.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5619.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5620.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5621.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5622.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5623.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5615_282x282.png",
    userName: "Bruno Fernandes",
    userReview: "4.5 review",
    viewProfileButton: "View Profile",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentListPage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Find Top Real Estate Agents - Agent Directory</title>
        <meta
          name="description"
          content="Discover the best real estate agents in your area. Browse our agent directory to view profiles, ratings, and find the perfect agent for your property needs."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-gray-50 md:gap-[75px] sm:gap-[50px]">
        <div className="flex flex-col gap-14 sm:gap-7">
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
                value={searchBarValue3}
                onChange={(e) => setSearchBarValue3(e.target.value)}
                prefix={
                  <Img
                    src="images/img_icon_24px_search.svg"
                    alt="Icon / 24px / Search"
                    className="h-[24px] w-[24px] object-contain"
                  />
                }
                suffix={
                  searchBarValue3?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue3("")} height={24} width={24} fillColor="DarkSlateGray" />
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
            <div className="container-xs flex flex-col items-start gap-6">
              <Heading
                size="headingxxxxl"
                as="h3"
                className="text-[36px] font-extrabold tracking-[-0.72px] text-darkslategray md:text-[34px] sm:text-[32px]"
              >
                Some Nearby Good Agents
              </Heading>
              <div className="flex gap-4 self-stretch md:flex-col">
                <div className="flex-1 rounded-[10px] border border-solid border-blue_gray-100_01 bg-white p-3.5 md:self-stretch">
                  <Input
                    size="sm"
                    shape="square"
                    name="address"
                    placeholder={`Enter your address`}
                    suffix={
                      <Img
                        src="images/img_icon_24px_search_dark_-_2.svg"
                        alt="Icon / 24px / Search"
                        className="h-[24px] w-[24px] object-contain"
                      />
                    }
                    className="gap-3 font-semibold text-dark___2"
                  />
                </div>
                <SelectBox
                  variant="fill"
                  shape="round"
                  indicator={
                    <Img src="images/img_arrowdown_dark_-_2.svg" alt="Arrow Down" className="h-[24px] w-[24px]" />
                  }
                  name="dropdownlarge"
                  placeholder={`Review`}
                  options={dropDownOptions}
                  className="w-[12%] gap-3 rounded-[10px] border border-solid border-blue_gray-100_01 px-[18px] font-bold md:w-full"
                />
                <Button
                  size="xl"
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_icon_20px_search.svg"
                      alt="Icon / 20px / Search"
                      className="mb-1 mt-0.5 h-[20px] w-[20px] object-contain"
                    />
                  }
                  className="min-w-[128px] gap-2.5 rounded-[10px] px-[18px] font-bold"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[60px] px-14 md:px-5 sm:gap-[30px]">
            <div className="container-xs grid grid-cols-4 justify-center gap-6 gap-y-[30px] md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {agentProfilesGrid.map((d, index) => (
                  <UserProfile {...d} key={"agentListOne" + index} />
                ))}
              </Suspense>
            </div>
            <div className="container-xs flex justify-center sm:flex-col">
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
        <Footer1 />
      </div>
    </>
  );
}
