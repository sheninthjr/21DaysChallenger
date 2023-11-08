import Link from "next/link";

const SideNavBar = () => {
  return (
    <>
      <div className=" flex w-1/6 h-[calc(100vh-2rem)] bg-gray-100 fixed bottom-0">
        <div className="flex flex-col justify-start items-start ml-20 space-y-20 pt-20 text-black text-lg">
          <div className="text-gray-700">
            <Link href="/">Dashboard</Link>
          </div>
          <div className="flex justify-center items-start space-x-2 ">
            <svg
              className="w-6 h-6"
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M46.34,20.52l-21-19a2,2,0,0,0-2.68,0l-21,19a2,2,0,1,0,2.68,3L24,5.7,43.66,23.48a2,2,0,0,0,2.68-3Z" />
              <path d="M42,26a2,2,0,0,0-2,2V43H8V28a2,2,0,0,0-4,0V45a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V28A2,2,0,0,0,42,26Z" />
            </svg>
            <Link href="/home">Home</Link>
          </div>
          <div className="flex justify-center items-start space-x-2">
            <svg
              className="w-8 h-8 font-bold"
              data-name="Capa 1"
              id="Capa_1"
              viewBox="0 0 20 19.84"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.34,5.71H6.25a.38.38,0,1,0,0,.75h5.09a.38.38,0,0,0,0-.75Z" />
              <path d="M11.71,8.35A.37.37,0,0,0,11.34,8H6.25a.37.37,0,0,0-.38.37.38.38,0,0,0,.38.38h5.09A.38.38,0,0,0,11.71,8.35Z" />
              <path d="M6.25,10.24a.38.38,0,1,0,0,.75H8.77a.38.38,0,1,0,0-.75Z" />
              <path d="M8.83,14.67H4.75a.87.87,0,0,1-.87-.87v-10a.87.87,0,0,1,.87-.88h8a.87.87,0,0,1,.87.88V8.9a.38.38,0,1,0,.75,0V3.78a1.63,1.63,0,0,0-1.62-1.63h-8A1.63,1.63,0,0,0,3.13,3.78v10a1.62,1.62,0,0,0,1.62,1.62H8.83a.37.37,0,0,0,.38-.37A.38.38,0,0,0,8.83,14.67Z" />
              <path d="M16.85,15.81s0-.05,0-.08v0s0,0,0-.05a.13.13,0,0,0,0-.06,9.28,9.28,0,0,1-.25-2.31,3.63,3.63,0,0,0-3.38-3.65,3.58,3.58,0,0,0-3.39,3.65,8.89,8.89,0,0,1-.25,2.31s0,0,0,.05,0,0,0,.06v0a11082239220553.34,11082239220553.34,0,0,0,0,.14.21.21,0,0,0,0,.06l0,.06.06,0,.07,0h.07a.11.11,0,0,0,.06,0h1.68a1.6,1.6,0,0,0,3.19,0h1.68l.11,0h0l.07,0,0,0,.05-.06a.21.21,0,0,0,0-.06Zm-3.63-5.42a2.86,2.86,0,0,1,2.63,2.9A11.39,11.39,0,0,0,16,15.34H10.41a11.21,11.21,0,0,0,.17-2.05A2.82,2.82,0,0,1,13.22,10.39Zm.84,5.71a.85.85,0,0,1-1.69,0h1.69Z" />
            </svg>
            <Link href="/notify"> Notification</Link>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
            >
              <path d="M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z"></path>
            </svg>
            <Link href="/setting">Settings</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
