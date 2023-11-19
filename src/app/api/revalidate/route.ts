import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");

    if(!tag) {
        return NextResponse.json({ status: 400, message: "Bad Request" });
    }
    
    revalidateTag(tag);

    return NextResponse.json({ revalidate: true, status: 200, message: "Success", now: Date.now() });
}