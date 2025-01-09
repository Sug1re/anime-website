import React from "react";
import * as Section from "./Components/Index";

export default function Home() {
  return (
    <main className=" flex">
      <Section.Title />
      <Section.Introduction />
      <Section.Information />
      <Section.Staff />
      <Section.Cast />
      <Section.Character />
      <Section.Footer />
    </main>
  );
}
