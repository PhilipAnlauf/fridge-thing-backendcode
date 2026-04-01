import { NextResponse } from "next/server";

const COOKIE_NAME = "fridge_auth_token";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logged out successfully." },
    { status: 200 }
  );

  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0, // expires immediately
    path: "/",
  });

  return response;
}
