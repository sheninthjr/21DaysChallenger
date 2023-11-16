"use client";
import { useRecoilValue } from "recoil";
import { userState } from "../store/atoms/userState";

interface SaveButtonProps {
  content: string;
  dayNumber: number;
  isDataSaved: boolean;
  isDataChecked: boolean;
  onButtonClick: () => void;
}

const SaveButton = ({
  dayNumber,
  content,
  isDataSaved,
  isDataChecked,
  onButtonClick,
}: SaveButtonProps) => {
  const emailData = useRecoilValue(userState);
  const handleClick = async () => {
    const useid = await fetch(
      `http://localhost:3002/api/users/${emailData.email}`,
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
    const method = isDataSaved ? "PUT" : "POST";
    try {
      const response = await fetch(`/api/users/${newUserId}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dayNumber: dayNumber,
          content: content,
          done: isDataChecked,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to save data. Status: ${response.status}`);
      }
      const data = await response.json();
      onButtonClick();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <button className="text-green-800" onClick={handleClick}>
        SAVE
      </button>
    </>
  );
};

export default SaveButton;
