import React from "react";
import * as Section from "./Components/Index";

export default function Home() {
  return (
    <main className=" flex min-h-screen">
      {/* <Section.Title />
      <Section.Introduction /> */}
      <Section.BackGroundSchool1 />
      {/* <Section.Information /> */}
      <Section.BackGroundSchool2 />
      {/* <Section.Staff />
      <Section.Cast />
      <Section.Character /> */}
      <Section.Footer />
    </main>
  );
}
