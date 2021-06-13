import GenCard from "../Components/GenCard";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import banner from "../Resources/CarWash4.jpeg";
import FactCard from "../Components/FactCard";
import Card from "../Components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Products = () => {
  return (
    <>
      <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
        <img
          src={banner}
          className="hidden lg:flex lg:w-full lg:h-screen opacity-20"
        ></img>
        <SideBar />

        <div className="lg:hidden flex ml-20 justify-center items-center w-full h-full mb-20 md:hidden lg:hidden">
          <Carousel className="w-9/12" responsive={responsive}>
          <GenCard />
          <GenCard />
          <GenCard />
          <GenCard />
          </Carousel>
        </div>
        
        <div className="hidden lg:inline absolute w-full h-full">
        <div className="absolute flex justify-center items-center w-full h-full">
          <Carousel className="w-9/12" responsive={responsive}>
            <Card />
            <Card />
            <Card />
            <Card />

          </Carousel>
        </div>
        </div>

      </div>
    </>
  );
};

export default Products;
