import React from "react";
import { IChild } from "../interfaces/default-props";
import { Header } from "@/components";

export const BaseLayout: React.FC<IChild> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
