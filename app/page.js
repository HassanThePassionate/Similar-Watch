// import Hero from "@/components/hero/Hero";
import Cards from "@/components/cards/Cards";
import SmCards from "@/components/smallCards/SmCards";
import React from "react";

const page = () => {
  return (
    <div className="layout">
      <Cards title="Trending Movies" />
      <Cards title="Top 10 Movies" />
      <SmCards />
    </div>
  );
};

export default page;
