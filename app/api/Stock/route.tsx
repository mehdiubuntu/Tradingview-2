import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const newx = await prisma.stock.findMany();
  console.log(newx);
  return NextResponse.json(newx);
}
