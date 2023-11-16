"use client";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/userState";
import { signIn, signOut, useSession } from "next-auth/react";
import { userId } from "../store/atoms/userId";

function AuthButton() {
  const { data: session } = useSession();
  const setUser = useSetRecoilState(userState);
  const setUserId = useSetRecoilState(userId);
  setUser({
    email: session?.user?.email,
    name: session?.user?.name,
    image: session?.user?.image,
  });
  const res = async () => {
    const postData = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session?.user?.email,
        name: session?.user?.name,
        image: session?.user?.image,
      }),
    });
    const useid = await fetch(
      `http://localhost:3002/api/users/${session?.user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  res();
  if (session) {
    return (
      <>
        <div className="flex justify-between md:justify-between bg-gray-800 p-4 fixed top-0 w-full z-10">
          <Link className="text-white text-2xl font-serif font-size" href="/">
            Jr
          </Link>
          <div className="flex justify-center space-x-3">
            <div>
              <img
                className="w-8 h-8 rounded-2xl"
                src={session?.user?.image ?? ""}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-32 bg-white rounded-lg h-8">
              <p className="text-black">{session?.user?.name}</p>
            </div>
            <button
              className="flex justify-center items-center w-24 bg-white rounded-lg h-8 text-red-900"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-between bg-gray-800 p-4 fixed top-0 w-full z-10">
        <Link className="text-white text-2xl font-serif font-size" href="/">
          Jr
        </Link>
        <div className="flex justify-center text-black items-center bg-white rounded-full">
          <button
            className="flex justify-center items-center w-24 bg-white rounded-lg h-8 text-blue-900"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default function NavBar() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
