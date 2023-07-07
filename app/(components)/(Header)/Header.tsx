import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import SignButtons from "./SignButtons";

export default function Header() {
  return (
    <Container className="flex flex-row py-4 justify-between">
      <Logo />
      <SignButtons />
    </Container>
  );
}
