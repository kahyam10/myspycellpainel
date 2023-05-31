import React from "react";
import Link from "next/link";

import HomeLayout from "../components/layout/homeLayout";
import About from "../components/home/About";
import Motivation from "../components/home/Motivation";
const IndexPage = () => {
  return (
    <HomeLayout>
      <About />
      <Motivation/>
    </HomeLayout>
  );
};
export default IndexPage;
