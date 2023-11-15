'use client';
import { useRecoilValue } from 'recoil'
import HomePage from 'ui/components/HomePage'
import { userState } from './recoilContextProvider'

export default function Home() {
  const setUser = useRecoilValue(userState);
  if(setUser.email){
    return (
      <>
      <HomePage/>
      </>
    )
  }
  
}