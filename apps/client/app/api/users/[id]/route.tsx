import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

interface UserProps {
    username:string;
}

interface Props {
    dayNumber:number
    content:string;
    done:boolean;
    userId:number;
}

const prisma = new PrismaClient()
export async function POST(req:NextRequest,{ params }: { params: { id: string } }){
    const body:Props = await req.json();
    const userId = parseInt(params.id)
    const task:Props = await prisma.task.create({
        data:{
            dayNumber:body.dayNumber,
            content:body.content,
            done : body.done || false,
            userId: userId
        }
    })
    return NextResponse.json(task,{status:200})
}
export async function GET(req:NextRequest,{params}:{params:{ id : number }}){
    const user : UserProps | null = await prisma.user.findUnique({
        where:{id : params.id },
        select:{
            username:true
        }
    })
    return NextResponse.json(user,{status:200})
}