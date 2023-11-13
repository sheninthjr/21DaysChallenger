import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";

export default function Welcome() {
  return (
    <Tailwind>
      <Html className="bg-white ml-4 mr-4">
        <div>
          <div className="flex justify-center">
            <div className="font-serif text-lg">
              <p>Welcome to our 21 Days Challenge Website</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div>
              <p>Hello Sheninth Jr!,</p>
            </div>
          </div>
          <div className="flex justify-start mt-0 overflow-wrap break-word">
            <p className="text-justify">
              Your Challenge for 21 days has been successfully registered on our
              Website.From here on we will notify your daily task.
            </p>
          </div>
          <div>
            <strong className="flex mb-2">Task</strong>
            <div className="ml-4 space-y-2">
              {Array.from({length:21},(_,index)=>(
                <div key={`day+${index+1}`} className="mb-2">
                    <div>Day {index+1}:</div>
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://github.com/sheninthjr/21DaysChallenger.git"
            target="_blank"
          >
            Visit our Website to make changes
          </a>
        </div>
      </Html>
    </Tailwind>
  );
}
