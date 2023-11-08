"use client";

import React, { useState } from "react";
import HomePage from "./HomePage";
import SaveButton from "./SaveButton";

interface Props {
  dayNumber: number;
}
const InputBox = ({ dayNumber }: Props) => {
  const [content, setContent] = useState("");
  return (
    <>
      <input
        className="bg-gray-100 rounded-lg h-10 w-5/6 p-3"
        type="text"
        value={content}
        placeholder={`Day ${dayNumber}`}
        onChange={(e) => setContent(e.target.value)}
      />
      <SaveButton content={content}  dayNumber={dayNumber} />
    </>
  );
};

export default InputBox;
