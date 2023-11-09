import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

interface UserProps {
  dayNumber: number;
  content: string;
  done: boolean;
  userId: number;
}

interface Props {
  dayNumber: number;
  content: string;
  done: boolean;
  userId: number;
}

const prisma = new PrismaClient();
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body: Props = await req.json();
  const userId = parseInt(params.id);
  const task: Props = await prisma.task.create({
    data: {
      dayNumber: body.dayNumber,
      content: body.content,
      done: body.done || false,
      userId: userId,
    },
  });
  return NextResponse.json(task, { status: 200 });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id);
  const user: UserProps[] = await prisma.task.findMany({
    where: {
      userId: userId,
    },
  });
  return NextResponse.json(user, { status: 200 });
}
