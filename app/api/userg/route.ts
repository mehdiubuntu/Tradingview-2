import { NextRequest, NextResponse } from "next/server"
import Prisma from "@/prisma/client";
import  z from "zod"
import prisma from "@/prisma/client";


// export async function GET (request :NextRequest){
//    const  userid = parseInt(body)
//     const user = await prisma.user.findUnique({where:{
//        id:userid,
//     }})
   
//    return NextResponse.json(user?.gmail)
// }

// export async function GET (request :NextRequest , {params}:{params:{id:string}}){
    
//    const userInfo = await  prisma.user.findUnique({
//        where : { id: parseInt(params.id) }
//    })
//    return NextResponse.json(userInfo?.gmail , {status:201})
// }




const createUserSchema = z.object({
    gmail : z.string().email(),
    password :z.string().min(8).max(16), 
})

export async function POST (request :NextRequest){
    const body = await request.json()
    const validation = createUserSchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors , {status : 400})
 
    const newUser = await  prisma.user.create({
        data : {gmail : body.gmail , password : body.password}
    })
    return NextResponse.json(newUser.id , {status:201})
}

export async function GET(request :NextRequest ) {
   const id = request.nextUrl.searchParams.get("id")
   if (id !== null) 
       {
       const x = parseInt(id)
       const userInfo = await  Prisma.user.findUnique({
           where : { id: x }
       })
       return NextResponse.json(userInfo?.gmail , {status:200})
       }
   return NextResponse.json({status : 500})
   }