import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Hygedent",
        price: 10000,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/15/8efc93a3-4bad-4b67-b118-0c5a094ec2f5.jpg"
    },
    {
        id: 2,
        name: "Stone Biru",
        price: 30000,
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2023/2/7/ae26d2ee-f006-4f17-b3b6-409c421ea77c.jpg"
    },
    {
        id: 3,
        name: "Model Gigi Palsu",
        price: 30000,
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
    },
    {
        id: 4,
        name: "Model Gigi Palsu",
        price: 30000,
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
    },
    {
        id: 5,
        name: "Model Gigi Palsu",
        price: 30000,
        image:"https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
    },
    
]

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({ status: 200, message: " Success", data: detailProduct });
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} });
    } 
    return NextResponse.json({ status: 200, message: " Success", data });
    
}