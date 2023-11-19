import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Hygedent",
        price: 56000,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/15/8efc93a3-4bad-4b67-b118-0c5a094ec2f5.jpg"
    },
    {
        id: 2,
        name: "Stone Biru",
        price: 30000,
        image: "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/11/16/0f356b77-6306-4223-9012-48d9181ad0b3.jpg"
    },
    {
        id: 3,
        name: "Flexi K2 100gr",
        price: 30000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/13/29b343ac-302b-4d3a-8a4f-da79b820bb98.jpg"
    },
    {
        id: 4,
        name: "Artikulator",
        price: 75000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/21/fcbcf90d-75d8-40ac-b67d-d025a6eb7e70.jpg"
    },
    {
        id: 5,
        name: "Artikulating Paper",
        price: 43000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/23/0e989226-5817-4567-9bcb-defa41c9794f.jpg"
    },
    {
        id: 6,
        name: "Model Gigi Gips Kuning",
        price: 20000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
    },
    {
        id: 7,
        name: "Model Gigi Gips Biru",
        price: 20000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
    },
    {
        id: 8,
        name: "Model Gigi Gips Pink",
        price: 20000,
        image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/9/12/ec891c65-94c4-4ca5-86a9-d34335a42001.jpg"
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