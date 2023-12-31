"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/userState";
import { useEffect, useState } from "react";
import SaveButton from "./SaveButton";
import { userId } from "../store/atoms/userId";
import { BASE_URL } from "./config";

interface Props {
  dayNumber: number;
}

const InputBox = ({ dayNumber }: Props) => {
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [isDataChecked, setIsDataChecked] = useState(false);
  const emailData = useRecoilValue(userState);
  const setUserId = useRecoilValue(userId);
  console.log(setUserId.userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (emailData && emailData.email) {
          const useid = await fetch(
            `${BASE_URL}/api/users/${emailData.email}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await useid.json();
          const newUserId = data.task.id;
          console.log(newUserId);
          if (emailData.email) {
            const response = await fetch(`/api/users/${newUserId}`, {
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
              setIsDataChecked(matchingItem?.done);
              setIsDataSaved(!!matchingItem);
            } else {
              console.error("Failed to fetch data");
            }
          }
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
      const useid = await fetch(
        `${BASE_URL}/api/users/${emailData.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await useid.json();
      const newUserId = data.task.id;
      const response = await fetch(`/api/users/${newUserId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dayNumber,
          done: !isDataChecked,
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        console.log("Data updated successfully", updatedData);
        setIsDataChecked(!isDataChecked);
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
        style={{ paddingTop: dayNumber === 1 ? "100px" : "0" }}
      >
        <div className="w-full md:w-11/12 lg:pl-96 lg:pr-5">
          <div className="flex flex-col justify-between border-2 border-gray-400 p-4 m-4">
            <div className="space-y-4 ">
              <div className="flex justify-center items-center">
                <div className="flex justify-start items-center w-full space-x-4">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    checked={isDataChecked}
                    onChange={handleCheckboxChange}
                  />
                  {isEditing ? (
                    <>
                      <input
                        className="bg-white rounded-lg h-10 w-11/12 p-3"
                        type="text"
                        value={content}
                        placeholder={`Day ${dayNumber}`}
                        onChange={(e) => setContent(e.target.value)}
                        onBlur={handleSaveClick}
                      />
                    </>
                  ) : (
                    <div className="flex flex-row w-full space-x-2 md:flex-row md:space-x-9 md:items-center">
                      <div
                        className={`flex items-center bg-white rounded-lg h-10 w-5/6 p-3 cursor-pointer${
                          isDataChecked ? " line-through text-gray-400" : ""
                        }`}
                      >
                        {content || `Day ${dayNumber}`}
                      </div>
                      <button
                        className="text-blue-600 w-full pl-32 md:w-auto mb-2 md:mb-0"
                        onClick={handleEditClick}
                      >
                        EDIT
                      </button>
                      <SaveButton
                        content={content}
                        dayNumber={dayNumber}
                        isDataSaved={isDataSaved}
                        isDataChecked={isDataChecked}
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
