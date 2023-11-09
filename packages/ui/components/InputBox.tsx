"use client";

import { useEffect, useState } from "react";
import SaveButton from "./SaveButton";

interface Props {
  dayNumber: number;
}

const InputBox = ({ dayNumber }: Props) => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/4`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          const sortedData = data.sort(
            (a: { dayNumber: number }, b: { dayNumber: number }) =>
              a.dayNumber - b.dayNumber
          );
          const matchingItem = sortedData.find(
            (item: { dayNumber: number }) => item.dayNumber === dayNumber
          );
          setContent(matchingItem?.content);
          setIsDataSaved(!!matchingItem);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dayNumber]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleCheckboxChange = async () => {
    try {
      const response = await fetch(`/api/users/4`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dayNumber,
          done: !isDataSaved,
        }),
      });

      if (response.ok) {
        console.log("Data updated successfully");
        setIsDataSaved(!isDataSaved);
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
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
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    checked={isDataSaved}
                    onChange={handleCheckboxChange}
                  />
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
                      <div
                        className={`flex items-center bg-white rounded-lg h-10 w-5/6 p-3 cursor-pointer${
                          isDataSaved ? " line-through text-gray-400" : ""
                        }`}
                      >
                        {content || `Day ${dayNumber}`}
                      </div>
                      <button
                        className="text-blue-600"
                        onClick={handleEditClick}
                      >
                        EDIT
                      </button>
                      <SaveButton
                        content={content}
                        dayNumber={dayNumber}
                        isDataSaved={isDataSaved}
                        onButtonClick={() => setIsDataSaved(true)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
