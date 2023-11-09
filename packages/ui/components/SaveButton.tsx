"use client";

interface SaveButtonProps {
  content: string;
  dayNumber: number;
  isDataSaved: boolean;
  onButtonClick: () => void;
}

const SaveButton = ({
  dayNumber,
  content,
  isDataSaved,
  onButtonClick,
}: SaveButtonProps) => {
  const handleClick = async () => {
    const method = isDataSaved ? "PUT" : "POST";
    try {
      const response = await fetch(`/api/users/4`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dayNumber: dayNumber,
          content: content,
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
