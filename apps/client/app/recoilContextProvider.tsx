"use client";

import { RecoilRoot, atom } from "recoil";
export const userState = atom({
    key:"userState",
    default:{email:null,name:null,image:null,userId:null}
})
export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}