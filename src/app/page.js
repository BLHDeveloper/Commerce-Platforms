"use client";
import Brand from "@/components/brand";
import Products from "@/components/products";
import Advertising from "@/components/advertising";
import Categories from "@/components/categories";
import Hints from "@/components/Hints";
import Personalized from "@/components/personalized";
import Ads from "@/components/ads";
import React from "react";
import Banner from "@/components/banner";
import Events from "@/components/events";
export default function Home() {
  return (
    <>
   <Brand /> 
   <Products />
   <Advertising/>
   <Categories/>
   <Hints/>
   <Personalized/>
   <Ads/>
   <Banner/>
   <Events/>  
    </>
  );
}
