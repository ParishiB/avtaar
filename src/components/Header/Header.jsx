import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import "./Header.css";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Header = () => {
  const [nav, setNav] = useState([{ text: "HOME" }, { text: "ELECTRONICS" }]);
  const [more, setMore] = useState([
    { text: "FURNITURE" },
    { text: "ELECTRONICS" },
    { text: "TRAVEL" },
    { text: "BOTANICAL" },
    { text: "CATEGORY NAME" },
    { text: "BOOKS" },
    { text: "MUSIC" },
  ]);

  useEffect(() => {
    console.log("hello");
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 400 && screenWidth <= 500) {
        setNav([]);
        setMore([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 500 && screenWidth <= 600) {
        setNav([{ text: "HOME" }]);
        setMore([
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 600 && screenWidth <= 700) {
        setNav([{ text: "HOME" }]);
        setMore([
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 700 && screenWidth <= 800) {
        setNav([{ text: "HOME" }]);
        setMore([
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 800 && screenWidth <= 900) {
        setNav([{ text: "HOME" }]);
        setMore([
          { text: "MOVIES" },
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 900 && screenWidth <= 1000) {
        setNav([{ text: "HOME" }, { text: "ELECTRONICS" }]);
        setMore([
          { text: "CLOTHING" },
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1000 && screenWidth <= 1100) {
        setNav([{ text: "HOME" }, { text: "ELECTRONICS" }, ,]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1000 && screenWidth <= 1100) {
        setNav([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          ,
        ]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1100 && screenWidth <= 1200) {
        setNav([{ text: "HOME" }, { text: "ELECTRONICS" }]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1200 && screenWidth <= 1300) {
        setNav([{ text: "HOME" }, { text: "ELECTRONICS" }, { text: "BOOKS" }]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1300 && screenWidth <= 1400) {
        setNav([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
        ]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1400 && screenWidth <= 1500) {
        setNav([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
        ]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1500 && screenWidth <= 1600) {
        setNav([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
        ]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      } else if (screenWidth > 1600 && screenWidth <= 1700) {
        setNav([
          { text: "HOME" },
          { text: "ELECTRONICS" },
          { text: "BOOKS" },
          { text: "MUSIC" },
          { text: "MOVIES" },
          { text: "CLOTHING" },
        ]);
        setMore([
          { text: "GAMES" },
          { text: "FURNITURE" },
          { text: "ELECTRONICS" },
          { text: "TRAVEL" },
          { text: "BOTANICAL" },
          { text: "CATEGORY NAME" },
        ]);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="text-white bg-[#2f302c] flow-root pt-12 h-[110px]">
        <div className="float-left flex ml-24 mt-2">
          <img
            src="images/logo.svg"
            alt=""
            className="h-[24.94px] w-[23px] mt-2 mr-2"
          />
          <h1 className="font-lato text-[24px] font-bold">ECOMM</h1>
        </div>
        <div className="flex ">
          {nav.map((item, index) => (
            <div
              className="font-lato text-[14px] p-[10px] font-semibold ml-12"
              key={index}
            >
              <button className="hover:text-blue-500 ml-10">{item.text}</button>
            </div>
          ))}
          {more.length > 0 && (
            <div className="flex-col">
              <Dropdown>
                <DropdownTrigger>
                  <Button className="ml-20 font-lato text-[14px] font-bold mt-3 flex">
                    MORE <IoIosArrowDown />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu className="bg-gray-700 text-white opacity-2 p-8">
                  {more.map((item, index) => (
                    <DropdownItem key={index} className="text-[10px] p-[10px]">
                      {item.text}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        </div>
        <div className="flex float-right pr-22 mr-32 -mt-10 text-[10px] border-b border-white border-opacity-100 w-[356px]">
          <icon className="m-1 text-[14px]">
            <CiSearch />
          </icon>
          <p className="">Search Something</p>
        </div>
      </div>
    </>
  );
};

export default Header;
