"use client";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { userState } from '../../../apps/client/app/recoilContextProvider'
import { signIn, signOut, useSession } from "next-auth/react";


function AuthButton() {
  const { data: session } = useSession();
  const user = useSetRecoilState(userState)
  user({email:session?.user?.email,name:session?.user?.name,image:session?.user?.image,userId:null})
  if (session) {
    return (
      <>
        <div className="flex justify-between bg-gray-800 p-4 fixed top-0 w-full z-10">
          <Link className="text-white text-2xl font-serif font-size" href="/">
            Jr
          </Link>
          <div className="flex justify-center space-x-3">
            <div>
              <img className="w-8 h-8 rounded-2xl" src={session?.user?.image ?? ''} alt="" />
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
        <div className="flex justify-center text-black items-center bg-white rounded-full p-1">
          <button className="flex justify-center items-center w-24 bg-white rounded-lg h-8 text-blue-900" onClick={() => signIn()}>
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
