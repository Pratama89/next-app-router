import { getData } from "@/services/product"

export default async function DetailProductPage(props: any) {
    const {params} = props;
    const product = await getData(`http://localhost:3000/api/product/?id=` + params.id)

    return (

        <div className="container mx-auto my-10 flex flex-col justify-center items-center">
            <div className="w-1/2 mx-auto border border-slate-600">
              <img 
              src={product.data.image} 
              alt="" 
              className="w-full object-cover aspect-square col-span-2"/>
            </div>
            <div className="bg-white p-6 px-6 items-center text-center">
                <h3>{product.data.name}</h3>
                <h3>Harga: Rp{product.data.price}</h3>
            </div>
        </div>
    )
}