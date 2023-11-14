import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

interface Props {
    email:string;
    name:string;
    password:string;
}
interface GetProps{
    email:string;
}
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    const body:Props = await req.json();
    const user:Props = await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password
        }
    })
    return NextResponse.json(user,{status:200})
}

export async function GET(req:NextRequest){
    const body: { email: string } = await req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
      select: {
        id: true,
      },
    });
    return NextResponse.json(user,{status:200})
}
