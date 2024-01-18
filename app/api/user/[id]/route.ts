import { NextRequest, NextResponse } from "next/server"
import Prisma from "@/prisma/client";



// export async function GET (request :NextRequest , {params}:{params:{id:string}}){
    
//     const userInfo = await  Prisma.user.findUnique({
//         where : { id: parseInt(params.id) }
//     })
//     return NextResponse.json(userInfo , {status:201})
// }


// console.log( "sssssssssssssssssssssssss" )
// console.log(  request.nextUrl.searchParams.get("name") )
// console.log( "sssssssssssssssssssssssss" )

export async function GET(request :NextRequest  ) {
const id = request.nextUrl.searchParams.get("id")
if (id !== null) 
    {
    const userid = parseInt(id)
    const userInfo = await  Prisma.user.findUnique({
        where : { id: userid }
    })
    return NextResponse.json(userInfo?.gmail , {status:200})
    }
return NextResponse.json({status : 500})
}