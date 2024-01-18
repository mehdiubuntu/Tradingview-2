import { NextRequest, NextResponse } from "next/server"
import  z from "zod"
import prisma from "@/prisma/client";

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


// interface prop {
//     id :number
// }
// export async function GET (request :NextRequest ,{id}:prop){
//     console.log( localStorage.getItem("token"))
//     const user = await prisma.user.findUnique({where:{
//        id:3,
//     }})
   
//    return NextResponse.json(user?.gmail)
// }

// interface props {
//     idx :string ;
// }

// export async function GET (request :NextRequest , {idx}:props){
//     // const body = await request.json()
//     // console.log(body)

//     const userInfo = await  prisma.user.findUnique({
//         where : { id: parseInt(idx) }
//     })
//     return NextResponse.json(userInfo , {status:201})
// }

