'use client';


interface SaveButtonProps {
  content: string;
  dayNumber: number;
}

const SaveButton = ({ dayNumber, content }: SaveButtonProps) => {
  const handleClick = async () => {
    const response = await fetch(`/api/users/4`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({dayNumber,content}),
    });
    const data = await response.json();
    console.log(data)
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
