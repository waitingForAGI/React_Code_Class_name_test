import { CloseSVG } from "../Input/close";
import MegaMenu1 from "../MegaMenu1";
import { Button, Input, Img, Heading, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menuOpen1, setMenuOpen1] = React.useState(false);
  const [menuOpen2, setMenuOpen2] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center gap-5 px-[120px] py-[18px] md:px-5 bg-white relative`}
    >
      <div className="flex items-start gap-2.5">
        <a href="#">
          <Img src="images/img_real_estate_1.svg" alt="Realestateone" className="h-[40px] w-[40px] self-center" />
        </a>
        <Text as="p" className="font-markoone text-[20px] font-normal text-orange-a700">
          Relasto
        </Text>
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
            <Heading as="p" className="text-[16px] font-semibold text-darkslategray">
              Home
            </Heading>
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
            <Heading as="p" className="text-[16px] font-semibold text-darkslategray">
              Listing
            </Heading>
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
            <Heading as="p" className="text-[16px] font-semibold text-darkslategray">
              Agents
            </Heading>
            <Img src="images/img_arrow_down.svg" alt="Arrowdown" className="h-[16px] w-[16px]" />
          </div>
          {menuOpen2 ? <MegaMenu1 /> : null}
        </li>
        <li>
          <a href="#">
            <Heading as="p" className="text-[16px] font-semibold text-darkslategray">
              Property{" "}
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading as="p" className="text-[16px] font-semibold text-darkslategray">
              Blog
            </Heading>
          </a>
        </li>
      </ul>
      <div className="flex w-[18%] items-center justify-center gap-2.5 md:w-full">
        <Input
          name="search"
          placeholder={`Search`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          prefix={
            <Img
              src="images/img_icon_24px_search.svg"
              alt="Icon / 24px / Search"
              className="h-[24px] w-[24px] object-contain"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="DarkSlateGray" />
            ) : null
          }
          className="h-[28px] flex-grow gap-2 pr-[30px] text-[18px] font-bold text-darkslategray sm:pr-5"
        />
        <Button size="md" shape="round" className="min-w-[94px] rounded-[10px] px-6 font-semibold sm:px-5">
          Log in
        </Button>
      </div>
    </header>
  );
}
