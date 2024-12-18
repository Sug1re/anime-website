import React from "react";
import * as Section from "./Components/Index";

export default function Home() {
  return (
    <main className=" flex whitespace-nowrap motion">
      <Section.Title />
      <Section.Introduction />
      <Section.Information />
      <Section.Character />
      <Section.Staff />
      <Section.Footer />
    </main>
  );
}
