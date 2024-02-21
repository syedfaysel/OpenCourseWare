import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { isPageStatic } from "next/dist/build/utils";

dbConnect();

export async function POST(request: NextRequest) {
  
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // check if user already exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { 
          message: "user doesn't exist",  
        },
        {status: 400}
      );
    }

    console.log(user);

    // check/compare password
    const isPassValid = await compare(password, user.password);
    console.log(isPassValid)
    if (!isPassValid) {
      return NextResponse.json(
        {
          error: "username or password incorrect",
        },
        { status: 400 }
      );
    }

    // create tokendata
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login sucessful",
      sucess: true,
    }, {status: 200})

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
    
  } catch (error: any) {
    return NextResponse.json({ message: "something went wrong",error: error.message });
  }
}
