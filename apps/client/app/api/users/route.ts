import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

interface Props {
    id: any;
    email:string;
    name:string;
    image:string;
}

const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    const body:Props = await req.json();
    const user:Props = await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            image:body.image
        }
    })
    const userId = user.id;
    return NextResponse.json({ id: userId },{status:200})
}

