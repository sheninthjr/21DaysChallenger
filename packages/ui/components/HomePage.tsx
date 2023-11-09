
import InputBox from "./InputBox";
import { GetServerSideProps } from 'next';

const Home = ({ content} : {content:string}) => {
  const dayNumbers = Array.from({ length: 21 }, (_, index) => index + 1);
  console.log(content)
  return (
    <>
<div>
      {dayNumbers.map((dayNumber) => (
        <InputBox key={dayNumber} dayNumber={dayNumber} context={content} />
      ))}
    </div>    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = 4; 
  const response = await fetch(`/api/users/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response)
  let content = '';
  if (response.ok) {
    const data = await response.json();
    content = data.content;
    console.log('API Data:', data); 
    console.log('Content:', content); 
  } else {
    console.error('Failed to fetch data');
  }

  return {
    props: { content },
  };
};

export default Home;
