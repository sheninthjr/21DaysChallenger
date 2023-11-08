import React, { useState } from "react";
import SaveButton from "./SaveButton";
import InputBox from "./InputBox";

interface Props { 
  dayNumber: number;
}
const Home = ({ dayNumber }: Props) => {
  
  return (
    <>
      <div
        className="flex justify-start items-center text-black"
        style={{ paddingTop: dayNumber === 1 ? "70px" : "0" }}
      >
        <div className="w-full pl-80 pr-5">
          <div className="flex flex-col justify-between border-2 border-gray-400 p-4 m-4">
            <div className="space-y-4">
              <div className="flex">
                <div className="flex items-center space-x-4 w-5/6">
                  <input className="w-5 h-5" type="checkbox" />
                  <InputBox dayNumber={dayNumber}/>
                </div>
                <div className="flex justify-end space-x-4 items-center ml-28">
                  <button className="text-blue-600">EDIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const numberOfDays = 21;
  const daysComponents = Array.from({ length: numberOfDays }, (v, i) => (
    <Home key={i} dayNumber={i + 1} />
  ));
  return <div>{daysComponents}</div>;
};

export default App;
