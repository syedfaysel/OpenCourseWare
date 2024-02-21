import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          message: "user already exists",
        },
        { status: 400 }
      );
    }

    // hash password
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    console.log(newUser);

    return NextResponse.json(
      { message: "user created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
