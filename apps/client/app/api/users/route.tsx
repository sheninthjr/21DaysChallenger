import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

interface Props {
    email:string;
    username:string;
    password:string;
}
const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    const body:Props = await req.json();
    const user:Props = await prisma.user.create({
        data:{
            email:body.email,
            username:body.username,
            password:body.password
        }
    })
    return NextResponse.json(user,{status:200})
}
