"use client";

import { useEffect, useState } from "react";
import SaveButton from "./SaveButton";

interface Props {
  context:string;
  dayNumber: number;
}


const InputBox = ({ context,dayNumber }: Props) => {
  const [content, setContent] = useState(context || "");
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  return (
    <>
      <div
        className="flex justify-start items-center text-black"
        style={{ paddingTop: dayNumber === 1 ? "70px" : "0" }}
      >
        <div className="w-full pl-80 pr-5">
          <div className="flex flex-col justify-between border-2 border-gray-400 p-4 m-4">
            <div className="space-y-4 ">
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center w-full space-x-4">
                  <input className="w-5 h-5" type="checkbox" />
                  {isEditing ? (
                    <input
                      className="bg-white rounded-lg h-10 w-10/12 p-3"
                      type="text"
                      value={content}
                      placeholder={`Day ${dayNumber}`}
                      onChange={(e) => setContent(e.target.value)}
                      onBlur={handleSaveClick}
                    />
                  ) : (
                    <div className="flex items-center w-full space-x-9">
                      <div className="flex items-center bg-white rounded-lg h-10 w-5/6 p-3 cursor-pointer">
                        {content || `Day ${dayNumber}`}
                      </div>
                      <button
                        className="text-blue-600"
                        onClick={handleEditClick}
                      >
                        EDIT
                      </button>
                    </div>
                  )}
                </div>
                <SaveButton content={content} dayNumber={dayNumber} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default InputBox;
