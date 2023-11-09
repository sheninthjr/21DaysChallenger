
import InputBox from "./InputBox";

const Home = () => {
  const dayNumbers = Array.from({ length: 21 }, (_, index) => index + 1);
  return (
    <>
      <div>
        {dayNumbers.map((dayNumber) => (
          <InputBox key={dayNumber} dayNumber={dayNumber} />
        ))}
      </div>
    </>
  );
};

export default Home;
