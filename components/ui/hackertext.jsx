"use client";
import { useEffect, useState } from "react";
import TextHackedEffectComponent from "react-text-hacked";

function HackerText({ children }) {
  return (
    <TextHackedEffectComponent
      defaultText={children}
      alphabet="X1234567890"
      autoStart
    />
  );
}

export default HackerText;
